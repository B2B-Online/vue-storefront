<template>
  <div class="product">
    <product-image :image="image" class="product__image-wrapper" />
    <div class="product__details">
      <div class="product__name cl-black">
        {{ product.name | htmlDecode }}
      </div>
      <div
        class="error cl-error"
        v-if="product.errors && Object.keys(product.errors).length > 0"
      >
        {{ product.errors | formatProductMessages }}
      </div>
      <div class="h6 cl-mid-grey mt10">
        {{ product.sku }}
      </div>
      <div
        class="h6 cl-bg-tertiary pt5 options"
        v-if="product.totals && product.totals.options"
      >
        <div v-for="opt in product.totals.options" :key="opt.label">
          <span class="opn">{{ opt.label }}: </span>
          <span class="opv" v-html="opt.value" />
        </div>
      </div>
      <div class="h6 cl-bg-tertiary pt5 options" v-else-if="product.options">
        <div v-for="opt in product.options" :key="opt.label">
          <span class="opn">{{ opt.label }}: </span>
          <span class="opv" v-html="opt.value" />
        </div>
      </div>
    </div>
    <div class="product__price">
      <div v-if="isOnline && product.totals">
        <span class="h4 cl-error" v-if="product.totals.discount_amount">{{
          (product.totals.row_total -
            product.totals.discount_amount +
            product.totals.tax_amount)
            | price
        }}
        </span>
        <span class="price-original h5" v-if="product.totals.discount_amount">{{
          product.totals.row_total_incl_tax | price
        }}</span>
        <span v-if="!product.totals.discount_amount" class="h4">{{
          product.totals.row_total_incl_tax | price
        }}</span>
      </div>
      <div v-else>
        <span class="h4 cl-error" v-if="product.special_price">{{ (product.priceInclTax * product.qty) | price }}
        </span>
        <span class="price-original h5" v-if="product.special_price">{{
          (product.originalPriceInclTax * product.qty) | price
        }}</span>
        <span v-if="!product.special_price" class="h4">{{
          (product.priceInclTax * product.qty) | price
        }}</span>
      </div>
    </div>
    <div class="product__qty">
      <span class="h5 cl-secondary">
        {{ $t('Qty') }}:
        <span class="cl-black weight-700">
          {{ product.qty }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { Product } from '@vue-storefront/core/modules/checkout/components/Product'
import { onlineHelper } from '@vue-storefront/core/helpers'
import ProductImage from 'theme/components/core/ProductImage'

export default {
  computed: {
    isOnline () {
      return onlineHelper.isOnline
    },
    image () {
      return {
        loading: this.thumbnail,
        src: this.thumbnail
      }
    }
  },
  mixins: [Product],
  components: {
    ProductImage
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-black: color(black);
$color-gainsboro: color(gainsboro);

.product {
  position: relative;
  color: $color-black;
  display: flex;
  align-items: center;
  padding: 20px 0 20px 30px;

  &:not(:last-of-type) {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid $color-gainsboro;
      width: 100%;
    }
  }

  &__price {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    flex: 0 0 80px;
    justify-content: center;
  }

  &__details {
    flex: auto;
    display: flex;
    flex-flow: column;
    @media only screen and (min-width: 576px) {
      padding-left: 40px;
    }
  }

  &__image-wrapper {
    display: none;
    padding-bottom: 70px;

    @media only screen and (min-width: 576px) {
      display: block;
      flex: 0 0 63px;
    }
  }

  &__qty {
    white-space: nowrap;
  }
}
.price-original {
  text-decoration: line-through;
}
.blend {
  mix-blend-mode: multiply;
  align-self: center;
  // flex: 0 0 121px;
  // padding-bottom: 32.68%;
}
</style>
