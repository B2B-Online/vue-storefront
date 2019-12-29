<template>
  <div v-if="!isCheckoutPage" class="header-menu">
    <div class="container">
      <ul class="flex menu">
        <li class="menu-item">
          <router-link
            class="menu-link home-link"
            :to="localizedRoute('/')"
            exact
          />
        </li>
        <li
          class="menu-item relative"
          :key="category.slug"
          v-for="category in visibleCategories"
          :class="{
            'with-submenu':
              category.children_data && category.children_data.length
          }"
          @mouseenter="activeSubMenu = category.id"
          @mouseleave="activeSubMenu = null"
        >
          <a
            v-if="category.children_count > 0"
            class="menu-link"
            :class="{ active: activeSubMenu == category.id }"
            :aria-label="$t('Show subcategories')"
            data-testid="categoryButton"
            @click="toggleSubMenu(category.id)"
          >
            {{ $t("Categories") }}
          </a>
          <router-link
            v-else
            class="menu-link"
            :to="
              localizedRoute({
                name: 'category',
                params: {
                  id: category.id,
                  slug: category.url,
                  url: category.url
                }
              })
            "
          >
            {{ $t("Categories") }}
          </router-link>

          <sub-category
            v-show="activeSubMenu === category.id"
            :category-links="category.children_data"
            :id="category.id"
            :parent-slug="category.url"
            class=""
          />
        </li>

        <li class="menu-item">
          <router-link
            class="menu-link"
            :to="localizedRoute('/promotions')"
            exact
          >
            {{ $t("Promotions") }}
          </router-link>
        </li>
        <li class="menu-item">
          <router-link
            class="menu-link"
            :to="localizedRoute('/new-products')"
            exact
          >
            {{ $t("Everything new") }}
          </router-link>
        </li>
        <li class="menu-item">
          <router-link
            class="menu-link"
            :to="localizedRoute('/popular-products')"
            exact
          >
            {{ $t("Popular products") }}
          </router-link>
        </li>
        <li class="menu-item">
          <router-link class="menu-link" :to="localizedRoute('/design')" exact>
            {{ $t("Design") }}
          </router-link>
        </li>
        <li class="menu-item">
          <router-link class="menu-link" :to="localizedRoute('/contact')" exact>
            {{ $t("Contact us") }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import onEscapePress from '@vue-storefront/core/mixins/onEscapePress';
import SubCategory from 'theme/components/core/blocks/HeaderMenu/SubCategory';
import CurrentPage from 'theme/mixins/currentPage';
export default {
  name: 'HeaderMenu',
  components: {
    SubCategory
  },
  mixins: [CurrentPage, onEscapePress],
  data () {
    return {
      allCategories: [],
      activeSubMenu: null
    };
  },
  computed: {
    ...mapGetters('category', ['getCategories']),
    categories () {
      return this.allCategories.filter(op => {
        const path = this.$route.path;
        if (
          path.toLowerCase().startsWith('elektryka') ||
          path.toLowerCase().startsWith('/elektryka')
        ) {
          return op.level === 1 && op.name.toLowerCase() === 'elektryka';
        } else if (
          path.toLowerCase().startsWith('chemia') ||
          path.toLowerCase().startsWith('/chemia')
        ) {
          return op.level === 1 && op.name.toLowerCase() === 'chemia';
        } else if (
          path.toLowerCase().startsWith('spozywcze') ||
          path.toLowerCase().startsWith('/spozywcze')
        ) {
          return op.level === 1 && op.name.toLowerCase() === 'spożywcze';
        } else {
          return op.level === 0;
        }
      });
    },
    ...mapState({
      currentUser: state => state.user.current
    }),
    visibleCategories () {
      const path = this.$route.path;
      if (path.toLowerCase().includes('oprawy-oswietleniowe-konsumenckie')) {
        return this.categories.filter(category => {
          return (
            category.url_path.includes('elektryka') &&
            (category.product_count > 0 || category.children_count > 0)
          );
        });
      } else {
        return this.categories.filter(category => {
          return category.product_count > 0 || category.children_count > 0;
        });
      }
    }
  },
  created () {
    this.allCategories = this.getCategories;
  },
  async mounted () {
    let categories = await this.$store.dispatch('category/list', {
      skipCache: true,
      includeFields: this.$store.state.config.entities.optimize
        ? this.$store.state.config.entities.category.includeFields
        : null
    });
    this.allCategories = categories.items;
  },
  methods: {
    onEscapePress () {
      this.closeMenu();
    },
    openMenu (id) {
      this.activeSubMenu = id;
      // this.$store.commit('ui/setOverlay', true)
    },
    closeMenu () {
      this.activeSubMenu = null;
      // this.$store.commit('ui/setOverlay', false)
    },
    toggleSubMenu (id) {
      if (this.activeSubMenu === id) {
        this.closeMenu();
      } else {
        this.openMenu(id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-menu {
  background: #0b5ca2;
  @media (max-width: 991px) {
    display: none;
  }
  * {
    box-sizing: border-box;
  }
  .menu {
    margin: 0px;
    padding: 0px;
    min-height: 76px;
    list-style: none;
    .menu-item {
      .menu-link {
        transition: all 0.2s ease-in-out;
        color: #fff;
        font-size: 20px;
        line-height: 76px;
        display: block;
        padding: 0px 20px;
        cursor: pointer;
      }
      &:hover {
        .menu-link {
          background-color: #f15c2c;
        }
      }
      .home-link {
        background: url("/assets/atat/ico_home.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 26px 25px;
        display: block;
        width: 26px;
        height: 76px;
        padding: 0px 40px;
      }
    }
  }
}
</style>
