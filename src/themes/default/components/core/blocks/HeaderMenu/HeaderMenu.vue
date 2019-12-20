<template>
  <div v-if="!isCheckoutPage">
    <div class="container">
      <ul class="flex menu">
        <li
          class="relative"
          :key="category.slug"
          v-for="category in visibleCategories"
          :class="{'with-submenu': (category.children_data && category.children_data.length)}"
        >
          <button
            v-if="category.children_count > 0"
            class="menu-link"
            :class="{active: activeSubMenu == category.id}"
            type="button"
            :aria-label="$t('Show subcategories')"
            data-testid="categoryButton"
            @click="toggleSubMenu(category.id)"
            @mouseenter="activeSubMenu = category.id"
            @mouseleave="activeSubMenu = null"
          >
            {{ $t('Categories') }}
          </button>
          <router-link
            v-else
            class="menu-link"
            :to="localizedRoute({ name: 'category', params: { id: category.id, slug: category.url, url: category.url }})"
          >
            {{ $t('Categories') }}
          </router-link>

          <sub-category
            v-show="activeSubMenu === category.id"
            :category-links="category.children_data"
            :id="category.id"
            :parent-slug="category.url"
            class="left-0"
          />
        </li>

        <li>
          <router-link
            class="menu-link"
            :to="localizedRoute('/promotions')"
            exact
          >
            {{ $t('Promotions') }}
          </router-link>
        </li>
        <li>
          <router-link
            class="menu-link"
            :to="localizedRoute('/new-products')"
            exact
          >
            {{ $t('Everything new') }}
          </router-link>
        </li>
        <li>
          <router-link
            class="menu-link"
            :to="localizedRoute('/popular-products')"
            exact
          >
            {{ $t('Popular products') }}
          </router-link>
        </li>
        <li>
          <router-link
            class="menu-link"
            :to="localizedRoute('/design')"
            exact
          >
            {{ $t('Design') }}
          </router-link>
        </li>
        <li>
          <router-link
            class="menu-link"
            :to="localizedRoute('/contact')"
            exact
          >
            {{ $t('Contact us') }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import onEscapePress from '@vue-storefront/core/mixins/onEscapePress'
import SubCategory from 'theme/components/core/blocks/HeaderMenu/SubCategory'
import CurrentPage from 'theme/mixins/currentPage'
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
    }
  },
  computed: {
    ...mapGetters('category', ['getCategories']),
    categories () {
      return this.allCategories.filter((op) => {
        const path = this.$route.path;
        if (path.toLowerCase().startsWith('elektryka') || path.toLowerCase().startsWith('/elektryka')) {
          return op.level === 1 && op.name.toLowerCase() === 'elektryka';
        } else if (path.toLowerCase().startsWith('chemia') || path.toLowerCase().startsWith('/chemia')) {
          return op.level === 1 && op.name.toLowerCase() === 'chemia';
        } else if (path.toLowerCase().startsWith('spozywcze') || path.toLowerCase().startsWith('/spozywcze')) {
          return op.level === 1 && op.name.toLowerCase() === 'spożywcze';
        } else {
          return op.level === 0;
        }
      })
    },
    ...mapState({
      currentUser: state => state.user.current
    }),
    visibleCategories () {
      const path = this.$route.path;
      if (path.toLowerCase().includes('oprawy-oswietleniowe-konsumenckie')) {
        return this.categories.filter(category => {
          return category.url_path.includes('elektryka') && (category.product_count > 0 || category.children_count > 0)
        });
      } else {
        return this.categories.filter(category => {
          return category.product_count > 0 || category.children_count > 0
        });
      }
    }
  },
  created () {
    this.allCategories = this.getCategories
  },
  async mounted () {
    let categories = await this.$store.dispatch('category/list', { skipCache: true, includeFields: this.$store.state.config.entities.optimize ? this.$store.state.config.entities.category.includeFields : null })
    this.allCategories = categories.items
  },
  methods: {
    onEscapePress () {
      this.closeMenu()
    },
    openMenu (id) {
      this.activeSubMenu = id
      // this.$store.commit('ui/setOverlay', true)
    },
    closeMenu () {
      this.activeSubMenu = null
      // this.$store.commit('ui/setOverlay', false)
    },
    toggleSubMenu (id) {
      if (this.activeSubMenu === id) {
        this.closeMenu()
      } else {
        this.openMenu(id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  @apply p-0 m-0;
  list-style: none;
  .menu-link {
    @apply block text-black font-medium;
    padding: 15px;
    line-height: 1.25rem;
    text-decoration: none;
    &:hover, &:focus {
      @apply text-primary bg-grey-lighter;
      outline: none;
    }
    &.active, &.router-link-active {
      @apply text-primary bg-grey-lighter border-t-2 border-solid border-primary;
      padding-top: 13px;
    }
  }
}
.with-submenu:hover {
  > .menu-link {
    @extend .menu-link.active;
  }
  > .submenu {
    display: block !important;
  }
}
</style>
