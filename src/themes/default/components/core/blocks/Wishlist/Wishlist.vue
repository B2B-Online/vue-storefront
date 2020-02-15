<template>
  <div class="wishlist cl-accent">
    <div class="row wishlist__head py15 mb25">
      <div class="col-xs-8 center-self">
        <h2 v-if="productsInWishlist.length" class="cl-black wishlist__title px30">
          {{ $t('Wishlist') }}
        </h2>
      </div>
      <div class="col-xs end-xs center-self">
        <i class="material-icons p10 mr20 pointer wishlist__close" @click="closeWishlist">close</i>
      </div>
    </div>
    <div class="row middle-xs my30">
      <clear-wishlist-button v-if="productsInWishlist.length" @click="clearWishlist" class="col-xs-12 col-sm end-xs" />
    </div>
    <h4 v-if="!productsInWishlist.length" class="cl-accent ml30">
      {{ $t('Your wishlist is empty.') }}
    </h4>
    <div v-if="!productsInWishlist.length" class="ml30">
      {{ $t("Don't hesitate and") }}
      <router-link :to="localizedRoute('/')">
        {{ $t('browse our catalog') }}
      </router-link>
      {{ $t('to find something beautiful for You!') }}
    </div>
    <ul class="products pl30">
      <product v-for="wishlistProduct in productsInWishlist" :key="wishlistProduct.id" :product="wishlistProduct" />
    </ul>
  </div>
</template>

<script>
import Wishlist from '@vue-storefront/core/compatibility/components/blocks/Wishlist/Wishlist'
import Product from 'theme/components/core/blocks/Wishlist/Product'
import ClearWishlistButton from 'theme/components/core/blocks/Wishlist/ClearWishlistButton'

export default {
  props: {
    product: {
      type: Object,
      required: false,
      default: () => { }
    }
  },
  components: {
    Product,
    ClearWishlistButton
  },
  methods: {
    clearWishlist () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t('Are you sure you would like to remove all the items from the wishlist?'),
        action1: { label: this.$t('OK'),
          action: () => {
            this.$store.dispatch('wishlist/clear')
          }
        },
        action2: { label: this.$t('Cancel'), action: 'close' },
        hasNoTimeout: true
      })
    }
  },
  mixins: [Wishlist]
}
</script>

<style lang="scss" scoped>
@import "~theme/css/animations/transitions";
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';

.wishlist {
  &__title {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
  }
  &__head{
    background: color(white-smoke);
    min-height: 118px;
  }
  &__close{
    color: color(gray-sec);
  }
}

</style>
