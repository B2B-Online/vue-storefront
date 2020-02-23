<template>
  <div class="pb60">
    <div class="products-list mb20">
      <product
        v-for="product in productsInCart"
        :key="product.sku"
        :product="product"
      />
    </div>

    <div
      v-if="productsInCart && productsInCart.length"
      class="checkout bg-cl-secondary pt10 pb10 serif cl-accent"
    >
      <h3 class="cl-black ml30 mb30 mt30 summary-title">
        {{ $t('Order Summary') }}
      </h3>
      <div
        v-for="(segment, index) in totals"
        :key="index"
        class="row pt10 pb10 pl30 pr30 "
        v-if="segment.code !== 'grand_total'"
      >
        <div class="col-xs cl-accent">
          {{ segment.title }}
        </div>
        <div
          v-if="segment.value != null"
          class="col-xs align-right cl-accent h4"
        >
          {{ segment.value | price }}
        </div>
      </div>

      <div
        class="row pt30 pb30 pl30 pr30 weight-700 h3 cl-black"
        v-for="(segment, index) in totals"
        :key="index"
        v-if="segment.code === 'grand_total'"
      >
        <div class="col-xs">
          {{ segment.title }}:
        </div>
        <div class="col-xs align-right">
          {{ segment.value | price }}
        </div>
      </div>
    </div>
    <!-- <div class="py50 px25">
      <h4 class="h3 m0">
        {{ $t('Safety') }}
      </h4>
      <p class="cl-tertiary lh20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam sed tempor lorem. Vivamus volutpat eros id est semper accumsan.
      </p>
      <h4 class="h3 mb0" v-if="!isVirtualCart">
        {{ $t('Shipping') }}
      </h4>
      <p class="cl-tertiary lh20" v-if="!isVirtualCart">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam sed tempor lorem. Vivamus volutpat eros id est semper accumsan.
      </p>
      <h4 class="h3 mb0">
        {{ $t('Returns') }}
      </h4>
      <p class="cl-tertiary lh20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam sed tempor lorem. Vivamus volutpat eros id est semper accumsan.
      </p>
    </div> -->
  </div>
</template>

<script>
import { CartSummary } from '@vue-storefront/core/modules/checkout/components/CartSummary'
import Product from './Product'

export default {
  components: {
    Product
  },
  mixins: [CartSummary]
}
</script>

<style lang="scss" scoped></style>
