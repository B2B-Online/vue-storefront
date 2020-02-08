<template>
  <li class="product pr20 py15">
    <div class="product__image" @click="closeWishlist">
      <router-link :to="localizedRoute({
        name: product.type_id + '-product',
        fullPath: product.url_path,
        params: { parentSku: product.parentSku ? product.parentSku : product.sku, slug: product.slug, childSku: product.sku }
      })"
      >
        <product-image :image="image" />
      </router-link>
    </div>
    <div class="product__details py5">
      <div @click="closeWishlist">
        <router-link :to="localizedRoute({
                       name: product.type_id + '-product',
                       fullPath: product.url_path,
                       params: { parentSku: product.parentSku ? product.parentSku : product.sku, slug: product.slug, childSku: product.sku }
                     })"
                     class="product__name"
        >
          {{ product.name | htmlDecode }}
        </router-link>
        <div class="h6 cl-bg-tertiary mt10 sku">
          {{ product.sku }}
        </div>
      </div>
    </div>
    <div class="product__price">
      <span class="price-special" v-if="product.special_price">{{ product.priceInclTax | price }}</span>&nbsp;
      <span class="price-original" v-if="product.special_price">{{ product.originalPriceInclTax | price }}</span>
      <span v-if="!product.special_price">
        {{ product.priceInclTax | price }}
      </span>
    </div>
    <div class="product__add-to-cart">
      <add-to-cart
        :product="product"
        class="product-add-to-cart btn btn--orange btn--add-to-cart btn--no-txt"
      />
    </div>
    <div class="product__remove">
      <span @click="removeFromWishlist(product)"><remove-button class="cl-accent" /></span>
    </div>
  </li>
</template>

<script>
import Product from '@vue-storefront/core/compatibility/components/blocks/Wishlist/Product'
import RemoveButton from './RemoveButton'
import AddToCart from 'theme/components/core/AddToCart'
import ProductImage from 'theme/components/core/ProductImage'

export default {
  components: {
    RemoveButton,
    ProductImage,
    AddToCart
  },
  mixins: [Product],
  computed: {
    image () {
      return {
        loading: this.thumbnail,
        src: this.thumbnail
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-black: color(black);
$color-mid-grey: color(mid-grey);
$color-gainsboro: color(gainsboro);

.product {
  position: relative;
  color: $color-black;
  display: flex;

  &:not(:last-of-type) {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -30px;
      border-bottom: 1px solid $color-gainsboro;
      width: calc(100% + 30px);
    }
  }

  &__add-to-cart, &__remove, &__price {
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }

  &__price {
    flex: 0 0 80px;
    justify-content: center;
  }

  &__remove {
    padding: 5px;
  }

  &__name {
    color: $color-black;
  }

  &__details {
    flex: auto;
    display: flex;
    flex-flow: column;
    @media only screen and (min-width: 576px) {
      padding-left: 40px;
    }
  }

  &__image {
    display: none;

    @media only screen and (min-width: 576px) {
      display: block;
      flex: 0 0 63px;
    }
  }

  .sku {
    color: $color-mid-grey;
  }
}

.price-original {
  text-decoration: line-through;
  color: #828282;
  font-size: .95rem;
}

</style>
