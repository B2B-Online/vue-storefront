<template>
  <div id="home">
    <head-image />

    <section class="new-collection container px15" v-if="promotions && promotions.length">
      <div>
        <header class="col-md-12">
          <h3 class="align-center cl-accent">
            {{ $t('Promotions of the day') }}
          </h3>
        </header>
      </div>
      <div class="row center-xs">
        <product-listing columns="4" :products="promotions" />
      </div>
    </section>

    <section class="new-collection container px15" v-if="popularProducts && popularProducts.length">
      <div>
        <header class="col-md-12">
          <h3 class="align-center cl-accent">
            {{ $t('Popular products') }}
          </h3>
        </header>
      </div>
      <div class="row center-xs">
        <product-listing columns="4" :products="popularProducts" />
      </div>
    </section>

    <section class="new-collection container px15" v-if="everythingNewCollection && everythingNewCollection.length">
      <div>
        <header class="col-md-12">
          <h3 class="align-center cl-accent">
            {{ $t('Everything new') }}
          </h3>
        </header>
      </div>
      <div class="row center-xs">
        <product-listing columns="4" :products="everythingNewCollection" />
      </div>
    </section>

    <section class="new-collection container px15">
      <div>
        <header class="col-md-12">
          <h3 class="align-center cl-accent">
            {{ $t('Blog') }}
          </h3>
        </header>
      </div>
    </section>

    <Onboard />
  </div>
</template>

<script>
// query constructor
import { prepareCategoryQuery } from '@vue-storefront/core/modules/catalog/queries/categoryQuery'
import { isServer, onlineHelper } from '@vue-storefront/core/helpers'

// Core pages
import Home from '@vue-storefront/core/pages/Home'

// Theme core components
import ProductListing from 'theme/components/core/ProductListing'
import HeadImage from 'theme/components/core/blocks/MainSlider/HeadImage'

// Theme local components
import Onboard from 'theme/components/theme/blocks/Home/Onboard'
import PromotedOffers from 'theme/components/theme/blocks/PromotedOffers/PromotedOffers'
import TileLinks from 'theme/components/theme/blocks/TileLinks/TileLinks'
import { Logger } from '@vue-storefront/core/lib/logger'
import { mapGetters } from 'vuex'
import config from 'config'

export default {
  mixins: [Home],
  components: {
    HeadImage,
    Onboard,
    ProductListing,
    PromotedOffers,
    TileLinks
  },
  metaInfo () {
    return {
      category: this.$route.meta.category || this.$props.category,
      title: this.$route.meta.title || this.$props.title,
      meta: this.$route.meta.description ? [{vmid: 'description', description: this.$route.meta.description}] : []
    }
  },
  props: {
    category: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    page: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
    categories () {
      return this.getCategories
    },
    everythingNewCollection () {
      return this.$store.state.categoryhomepage.new_products
    },
    promotions () {
      return this.$store.state.categoryhomepage.promotions
    },
    popularProducts () {
      return this.$store.state.categoryhomepage.popular_products
    },
    isOnline () {
      return onlineHelper.isOnline
    }
  },
  created () {
    // Load personal and shipping details for Checkout page from IndexedDB
    this.$store.dispatch('checkout/load')
  },
  async beforeMount () {
    if (this.$store.state.__DEMO_MODE__) {
      const onboardingClaim = await this.$store.dispatch('claims/check', { claimCode: 'onboardingAccepted' })
      if (!onboardingClaim) { // show onboarding info
        this.$bus.$emit('modal-toggle', 'modal-onboard')
        this.$store.dispatch('claims/set', { claimCode: 'onboardingAccepted', value: true })
      }
    }
  },
  mounted () {
    if (!this.isLoggedIn && localStorage.getItem('redirect')) this.$bus.$emit('modal-show', 'modal-signup')
  },
  watch: {
    isLoggedIn () {
      const redirectObj = localStorage.getItem('redirect')
      if (redirectObj) this.$router.push(redirectObj)
      localStorage.removeItem('redirect')
    }
  },
  async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data
    Logger.info('Calling asyncData in CategoryHome (theme)')()

    let newProductsQuery = prepareCategoryQuery({ category: route.meta.category, queryConfig: 'newProducts' })
    let promotionsQuery = prepareCategoryQuery({ category: route.meta.category, queryConfig: 'promotions' })
    let popularProductsQuery = prepareCategoryQuery({ category: route.meta.category, queryConfig: 'popularProducts' })

    const newProductsResult = await store.dispatch('product/list', {
      query: newProductsQuery,
      size: 8,
      sort: 'created_at:desc'
    })
    if (newProductsResult) {
      store.state.categoryhomepage.new_products = newProductsResult.items
    }

    const promotionsResult = await store.dispatch('product/list', {
      query: promotionsQuery,
      size: 8,
      sort: 'created_at:desc'
    })
    if (promotionsResult) {
      store.state.categoryhomepage.promotions = promotionsResult.items
    }

    const popularProductsResult = await store.dispatch('product/list', {
      query: popularProductsQuery,
      size: 8,
      sort: 'created_at:desc'
    })
    if (popularProductsResult) {
      store.state.categoryhomepage.popular_products = popularProductsResult.items
    }

    await store.dispatch('promoted/updateHeadImage')
    await store.dispatch('promoted/updatePromotedOffers')
  },
  beforeRouteEnter (to, from, next) {
    if (!isServer && !from.name) { // Loading products to cache on SSR render
      next(vm => {
        let newProductsQuery = prepareCategoryQuery({ category: 'chemia', queryConfig: 'newProducts' })
        vm.$store.dispatch('product/list', {
          query: newProductsQuery,
          size: 8,
          sort: 'created_at:desc'
        })
      })
    } else {
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-collection {
    @media (max-width: 767px) {
      padding-top: 0;
    }
  }
</style>
