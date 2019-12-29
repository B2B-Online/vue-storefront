<template>
  <ul v-if="children" class="submenu">
    <li
      class="relative submenu-item"
      :key="link.slug"
      v-for="link in children"
      :class="{
        'with-submenu': link.children_data && link.children_data.length
      }"
      @mouseenter="activeSubMenu = link.id"
      @mouseleave="activeSubMenu = null"
    >
      <router-link
        class="menu-link"
        :class="{ active: activeSubMenu == link.id }"
        :to="
          localizedRoute({
            name: 'category',
            params: { id: link.id, slug: link.url_path }
          })
        "
      >
        {{ link.name }}
      </router-link>
      <sub-category
        v-show="activeSubMenu === link.id"
        :category-links="link.children_data"
        :id="link.id"
        v-if="link.children_count > 0"
        :parent-slug="link.slug"
        class=""
      />
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SubCategory',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    parentSlug: {
      type: String,
      required: false,
      default: ''
    },
    categoryLinks: {
      type: null,
      required: false,
      default: false
    }
  },
  data () {
    return {
      activeSubMenu: null
    };
  },
  computed: {
    children () {
      if (
        !this.$store.state.config.entities.category.categoriesDynamicPrefetch &&
        this.categoryLinks &&
        this.categoryLinks.length > 0 &&
        this.categoryLinks[0].name
      ) {
        // we're using dynamic prefetching and getting just category.children_data.id from 1.7
        const result = this.categoryLinks;
        return result;
      } else {
        const result = this.$store.state.category.list.filter(c => {
          return c.parent_id === this.id;
        }); // return my child categories
        return result;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.submenu {
  z-index: 1000;
  position: absolute;
  background: #f15c2c;
  list-style: none;
  padding: 0px 0px;
  margin: 0px;
  width: 350px;
  box-shadow: 1px 3px 3px rgba(#000, 0.1);
  .submenu-item {
    border-bottom: solid 1px #f58966;
    display: block;
    cursor: pointer;
    transition: all 0.1s ease-in;
    .menu-link {
      color: #fff;
      font-size: 18px;
      display: block;
      padding: 10px 20px;
    }
    &:hover {
      background: #0b5ca2;
      box-shadow: 0px 3px 3px rgba(#000, 0.1);
    }
  }
  .submenu {
    background: #0b5ca2;
    position: absolute;
    left: 100%;
    top: 0px;
    .submenu-item {
      // border-bottom: solid 1px rgba(#fff, 0.5);
      border-bottom: none;
      &:hover {
        background: #fff;
        .menu-link {
          color: #000000;
        }
      }
    }
    .submenu {
      background: #fff;
      .submenu-item {
        &:hover {
          background: none;
          box-shadow: none;
          .menu-link {
            color: #626d79;
          }
        }
      }
    }
  }
}
</style>
