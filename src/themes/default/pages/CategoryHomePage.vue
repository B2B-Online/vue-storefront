<template>
  <div id="home">
    <main-slider />
    <div class="container pt50">
      <div class="row">
        <div class="col-lg-9">
          <products-slider
            :title="$t('Promotions of the day')"
            :products="promotions"
            :config="configSliderPromo"
            v-if="promotions && promotions.length"
            link-more="/wiecej-promocji"
            :link-more-text="$t('Wszystkie promocje dnia')"
            id="promo"
          />
          <products-slider
            :title="$t('Popular products')"
            :products="popularProducts"
            :config="configSliderPopular"
            v-if="popularProducts && popularProducts.length"
            link-more="/wiecej-popularnych"
            :link-more-text="$t('Wszystkie popularne')"
            id="popular"
          />
          <products-slider
            :title="$t('Everything new')"
            :products="newProducts"
            :config="configSliderNew"
            v-if="newProducts && newProducts.length"
            link-more="/wiecej-nowosci"
            :link-more-text="$t('Wszystkie nowości')"
            id="newprod"
          />
          <!-- <section
            class="new-collection container px15"
            v-if="promotions && promotions.length"
          >
            <div>
              <header class="col-md-12">
                <h3 class="align-center cl-accent">
                  {{ $t("Promotions of the day") }}
                </h3>
              </header>
            </div>
            <div class="row center-xs">

            </div>
          </section> -->
          <!--
          <section
            class="new-collection container px15"
            v-if="popularProducts && popularProducts.length"
          >
            <div>
              <header class="col-md-12">
                <h3 class="align-center cl-accent">
                  {{ $t("Popular products") }}
                </h3>
              </header>
            </div>
            <div class="row center-xs">
              <product-slider columns="4" :products="popularProducts" />
            </div>
          </section>

          <section
            class="new-collection container px15"
            v-if="everythingNewCollection && everythingNewCollection.length"
          >
            <div>
              <header class="col-md-12">
                <h3 class="align-center cl-accent">
                  {{ $t("Everything new") }}
                </h3>
              </header>
            </div>
            <div class="row center-xs">
              <product-slider
                :products="everythingNewCollection"
              />
            </div>
          </section>

          <section class="new-collection container px15">
            <div>
              <header class="col-md-12">
                <h3 class="align-center cl-accent">
                  {{ $t("Blog") }}
                </h3>
              </header>
            </div>
          </section> -->
        </div>
        <div class="col-lg-3 first-lg">
          <main-category-menu /> 
          <newsletter class="" />
        </div>
      </div>
    </div>
    <manufacturer-slider
      :css-class="['manufacturer-slider', 'w-100']"
      :manufacturers="manufacturers"
    />
    <Onboard />
  </div>
</template>

<script>
// query constructor
import { prepareCategoryQuery } from '@vue-storefront/core/modules/catalog/queries/categoryQuery';
import { isServer, onlineHelper } from '@vue-storefront/core/helpers';

// Core pages
import Home from '@vue-storefront/core/pages/Home';

// Theme core components
import ProductsSlider from 'theme/components/core/ProductsSlider';
import MainSlider from 'theme/components/core/blocks/MainSlider/MainSlider';
import Newsletter from 'theme/components/core/blocks/Footer/Newsletter';
import ManufacturerSlider from 'theme/components/core/blocks/MultiSlider/ManufacturerSlider';
import MainCategoryMenu  from 'theme/components/core/blocks/Category/MainCategoryMenu';

// Theme local components
import Onboard from 'theme/components/theme/blocks/Home/Onboard';
import { Logger } from '@vue-storefront/core/lib/logger';
import { mapGetters } from 'vuex';
import config from 'config';

export default {
  mixins: [Home],
  components: {
    Newsletter,
    MainSlider,
    Onboard,
    ProductsSlider,
    ManufacturerSlider,
    MainCategoryMenu
  },
  data () {
    return {
      configSliderPromo: {
        perPageCustom: [
          [1, 1],
          [600, 2],
          [768, 3],
          [992, 2],
          [1200, 3],
          [1400, 4]
        ],
        paginationEnabled: false,
        scrollPerPage: false,
        autoplayTimeout: 5000,
        speed: 1000,
        navigationEnabled: true
      },
      configSliderPopular: {
        perPageCustom: [
          [1, 1],
          [600, 2],
          [768, 3],
          [992, 2],
          [1200, 3],
          [1400, 4]
        ],
        paginationEnabled: false,
        scrollPerPage: false,
        autoplayTimeout: 5000,
        speed: 1000,
        navigationEnabled: true
      },
      configSliderNew: {
        perPageCustom: [
          [1, 1],
          [600, 2],
          [992, 2],
          [1200, 3],
          [1400, 4]
        ],
        paginationEnabled: false,
        scrollPerPage: false,
        autoplayTimeout: 5000,
        speed: 1000,
        navigationEnabled: true
      },
      manufacturers: [
        {
          link: 'abinbev',
          image: '/assets/atat/loga/abinbev.png'
        },
        {
          link: 'alcatel',
          image: '/assets/atat/loga/alcatel.png'
        },
        {
          link: 'alstom',
          image: '/assets/atat/loga/alstom.png'
        },
        {
          link: 'armstrong',
          image: '/assets/atat/loga/armstrong.png'
        },
        {
          link: 'astrazeneca',
          image: '/assets/atat/loga/astrazeneca.png'
        },
        {
          link: 'bayer',
          image: '/assets/atat/loga/bayer.png'
        },
        {
          link: 'cooper',
          image: '/assets/atat/loga/cooper.png'
        },
        {
          link: 'dsm',
          image: '/assets/atat/loga/dsm.png'
        },
        {
          link: 'eaton',
          image: '/assets/atat/loga/eaton.png'
        },
        {
          link: 'electrolux',
          image: '/assets/atat/loga/electrolux.png'
        },
        {
          link: 'evonik',
          image: '/assets/atat/loga/evonik.png'
        },
        {
          link: 'federalmogul',
          image: '/assets/atat/loga/federalmogul.png'
        },
        {
          link: 'finisar',
          image: '/assets/atat/loga/finisar.png'
        },
        {
          link: 'henkel',
          image: '/assets/atat/loga/henkel.png'
        },
        {
          link: 'hp',
          image: '/assets/atat/loga/hp.png'
        }
      ]
    };
  },
  metaInfo () {
    return {
      category: this.$route.meta.category || this.$props.category,
      title: this.$route.meta.title || this.$props.title,
      meta: this.$route.meta.description
        ? [{ vmid: 'description', description: this.$route.meta.description }]
        : []
    };
  },
  props: {
    category: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    page: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
    categories () {
      return this.getCategories;
    },
    newProducts () {
      return this.$store.state.categoryhomepage.new_products;
    },
    promotions () {
      return this.$store.state.categoryhomepage.promotions;
    },
    popularProducts () {
      return this.$store.state.categoryhomepage.popular_products;
    },
    isOnline () {
      return onlineHelper.isOnline;
    }
  },
  created () {
    // Load personal and shipping details for Checkout page from IndexedDB
    this.$store.dispatch('checkout/load');
  },
  async beforeMount () {
    if (this.$store.state.__DEMO_MODE__) {
      const onboardingClaim = await this.$store.dispatch('claims/check', {
        claimCode: 'onboardingAccepted'
      });
      if (!onboardingClaim) {
        // show onboarding info
        this.$bus.$emit('modal-toggle', 'modal-onboard');
        this.$store.dispatch('claims/set', {
          claimCode: 'onboardingAccepted',
          value: true
        });
      }
    }
  },
  mounted () {
    if (!this.isLoggedIn && localStorage.getItem('redirect')) { this.$bus.$emit('modal-show', 'modal-signup'); }
  },
  watch: {
    isLoggedIn () {
      const redirectObj = localStorage.getItem('redirect');
      if (redirectObj) this.$router.push(redirectObj);
      localStorage.removeItem('redirect');
    }
  },
  async asyncData ({ store, route }) {
    // this is for SSR purposes to prefetch data
    Logger.info('Calling asyncData in CategoryHome (theme)')();

    let newProductsQuery = prepareCategoryQuery({
      category: route.meta.category,
      queryConfig: 'newProducts'
    });
    let promotionsQuery = prepareCategoryQuery({
      category: route.meta.category,
      queryConfig: 'promotions'
    });
    let popularProductsQuery = prepareCategoryQuery({
      category: route.meta.category,
      queryConfig: 'popularProducts'
    });

    const newProductsResult = await store.dispatch('product/list', {
      query: newProductsQuery,
      size: 24,
      sort: 'created_at:desc'
    });
    if (newProductsResult) {
      store.state.categoryhomepage.new_products = newProductsResult.items;
    }

    const promotionsResult = await store.dispatch('product/list', {
      query: promotionsQuery,
      size: 24,
      sort: 'created_at:desc'
    });
    if (promotionsResult) {
      store.state.categoryhomepage.promotions = promotionsResult.items;
    }

    const popularProductsResult = await store.dispatch('product/list', {
      query: popularProductsQuery,
      size: 24,
      sort: 'created_at:desc'
    });
    if (popularProductsResult) {
      store.state.categoryhomepage.popular_products =
        popularProductsResult.items;
    }

    await store.dispatch('promoted/updateHeadImage');
    await store.dispatch('promoted/updatePromotedOffers');
  },
  beforeRouteEnter (to, from, next) {
    if (!isServer && !from.name) {
      // Loading products to cache on SSR render
      next(vm => {
        let newProductsQuery = prepareCategoryQuery({ category: vm.$route.meta.category, queryConfig: 'newProducts' })
        vm.$store.dispatch('product/list', {
          query: newProductsQuery,
          size: 24,
          sort: 'created_at:desc'
        });
      });
    } else {
      next();
    }
  }
};
</script>

<style lang="scss" scoped>
.new-collection {
  @media (max-width: 767px) {
    padding-top: 0;
  }
}
</style>
