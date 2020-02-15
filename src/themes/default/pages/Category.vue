<template>
  <div id="category">
    <header class="category-header bg-cl-secondary py35 pl20">
      <div class="container">
        <breadcrumbs :routes="breadcrumbs.routes" :active-route="category.name" />
        <div class="row middle-sm">
          <h1 class="col-xs category-title">
            {{ category.name }}
          </h1>
          <div class="sorting col-xs align-right">
            <columns @change-column="columnChange" />
            <sort-by :has-label="true" />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row m0">
          <button
            class="col-xs mt25 mr10 p15 mobile-filters-button bg-cl-th-accent brdr-none cl-white h5 sans-serif fs-medium-small"
            @click="openFilters"
          >
            {{ $t('Filters') }}
          </button>
          <div class="mobile-sorting col-xs mt25 ml10 p0">
            <sort-by />
          </div>
        </div>
        <main-category-menu class="mobile-only" />
      </div>
    </header>
    <div class="container pb60">
      <div class="row m0 listing-wrapper">
        <div class="col-md-4 col-lg-3 start-xs category-filters">
          <sidebar :filters="filters.available" />
          <main-category-menu />
        </div>

        <div class="col-md-3 start-xs mobile-filters" v-show="mobileFilters">
          <div class="close-container">
            <i class="material-icons p15 close cl-accent" @click="closeFilters">close</i>
          </div>
          <sidebar class="mobile-filters-body" :filters="filters.available" />

          <div class="align-right">
            <button-full
              class="mb20 mt20 btn__filter p10 bg-cl-th-accent brdr-none cl-white h5 sans-serif fs-medium-small"
              @click.native="closeFilters"
            >
              {{ $t('Filter') }}
            </button-full>
          </div>
        </div>
        <div class="col-md-8 col-lg-9 border-box products-list">
          <!-- <p class="col-xs-12 end-md m0 pb20 cl-secondary">
            {{ productsTotal }} {{ $t('items') }}
          </p> -->
          <div v-if="isCategoryEmpty" class="px10">
            <h4 data-testid="noProductsInfo">
              {{ $t('No products found!') }}
            </h4>
            <p>{{ $t('Please change Your search criteria and try again. If still not finding anything relevant, please visit the Home page and try out some of our bestsellers!') }}</p>
          </div>
          <product-listing :columns="defaultColumn" :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from '@vue-storefront/core/pages/Category'
import Sidebar from '../components/core/blocks/Category/Sidebar.vue'
import ProductListing from '../components/core/ProductListing.vue'
import Breadcrumbs from '../components/core/Breadcrumbs.vue'
import SortBy from '../components/core/SortBy.vue'
import Columns from '../components/core/Columns.vue'
import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import MainCategoryMenu from 'theme/components/core/blocks/Category/MainCategoryMenu';

// import builder from 'bodybuilder'

export default {
  components: {
    ButtonFull,
    ProductListing,
    Breadcrumbs,
    Sidebar,
    SortBy,
    Columns,
    MainCategoryMenu
  },

  data () {
    return {
      mobileFilters: false,
      defaultColumn: 4
    }
  },
  async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data - and it's always executed before parent component methods
    await store.dispatch('category/mergeSearchOptions', { // this is just an example how can you modify the search criteria in child components
      sort: store.state.config.products.defaultSortBy.attribute + (store.state.config.products.defaultSortBy.order ? ':' + store.state.config.products.defaultSortBy.order : '')
      // searchProductQuery: builder().query('range', 'price', { 'gt': 0 }).andFilter('range', 'visibility', { 'gte': 2, 'lte': 4 }) // this is an example on how to modify the ES query, please take a look at the @vue-storefront/core/helpers for refernce on how to build valid query
    })
  },
  methods: {
    openFilters () {
      this.mobileFilters = true
    },
    closeFilters () {
      this.mobileFilters = false
    },
    notify () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t('Please select the field which You like to sort by'),
        action1: { label: this.$t('OK') }
      })
    },
    columnChange (column) {
      this.defaultColumn = column
    }
  },
  mixins: [Category]
}
</script>

<style lang="scss" scoped>
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';
  $color-gainsboro: color(gainsboro);
  $color-white: color(white);
  $color-white-smoke: color(white-smoke);

  .main-category-menu {
    margin: 20px 0;

    &.mobile-only {
      @media (min-width: 768px) {
        display: none;
      }
    }
  }

  .sidebar {
    .main-category-menu {
      display: none;
    }
  }

  .btn {
    &__filter {
      min-width: 100px;
    }
  }
  .divider {
    width: calc(100vw - 8px);
    bottom: 20px;
    left: -36px;
  }
  .category-filters {
    width: 242px;

    @media (min-width: 768px) {
      padding-right: 30px;
      padding-left: 0;
    }
  }

  .mobile-filters {
    display: none;
    overflow: auto;
  }

  .mobile-filters-button {
    display: none;
  }

  .mobile-sorting {
    display: none;
  }

  .category-title {
    // line-height: 65px;
    font-size: 28px;
  }

  .category-header {
    padding: 40px 0 100px;
  }

  .products-list {
    border: 1px solid $color-gainsboro;
    border-radius: 3px;
    background: $color-white;

    @media (min-width: 768px) {
      padding: 0 20px;
    }
  }

  .listing-wrapper {
    margin-top: -90px;
  }


  @media (max-width: 767px) {
    .category-title {
      margin: 10px 0;
      font-size: 36px;
      line-height: 40px;
    }

    .products-list {
      width: 100%;
      max-width: none;
    }

    .mobile-filters {
      display: block;
    }

    .mobile-filters-button {
      display: block;
      height: 45px;
    }

    .sorting {
      display: none;
    }

    .mobile-sorting {
      display: block;
    }

    .category-filters {
      display: none;
    }

    .product-listing {
      justify-content: center;;
    }

    .mobile-filters {
      position: fixed;
      background-color: $color-white-smoke;
      z-index: 5;
      padding: 20px;
      left: 0;
      width: 100vw;
      height: 100vh;
      top: 0;
      box-sizing: border-box;
    }

    .mobile-filters-body {
      border: 1px solid $color-gainsboro;
      border-radius: 3px;
      background: $color-white;
      padding: 0 20px 30px;
    }
  }

  .close-container {
    text-align: right;
  }

  .close {
    margin-left: auto;
  }
</style>
<style lang="scss">
.product-image {
  max-height: unset !important;
}
</style>
