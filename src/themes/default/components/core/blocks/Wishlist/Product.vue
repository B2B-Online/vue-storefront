<template>
  <li class="row pr20 py15">
    <div class="image" @click="closeWishlist">
      <router-link :to="localizedRoute({
        name: product.type_id + '-product',
        fullPath: product.url_path,
        params: { parentSku: product.parentSku ? product.parentSku : product.sku, slug: product.slug, childSku: product.sku }
      })"
      >
        <product-image :image="image" />
      </router-link>
    </div>
    <div class="col-xs between-xs flex pl40 py5">
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
    <div class="col-xs flex center-xs py5">
      <span class="price-special" v-if="product.special_price">{{ product.priceInclTax | price }}</span>&nbsp;
      <span class="price-original" v-if="product.special_price">{{ product.originalPriceInclTax | price }}</span>
      <span v-if="!product.special_price">
        {{ product.priceInclTax | price }}
      </span>
    </div>
    <div class="col-xs flex center-xs py5">
      <span @click="removeFromWishlist(product)"><remove-button class="cl-accent" /></span>
    </div>
  </li>
</template>

<script>
import Product from '@vue-storefront/core/compatibility/components/blocks/Wishlist/Product'
import RemoveButton from './RemoveButton'
import ProductImage from 'theme/components/core/ProductImage'

export default {
  components: {
    RemoveButton,
    ProductImage
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

.product__name {
  color: $color-black;
}
.sku {
  color: $color-mid-grey;
}
.col-xs {
  flex-direction: column;
}
input {
  width: 30px;
}
.image{
  flex: 0 0 63px;
}
.price-original {
  text-decoration: line-through;
  color: #828282;
  font-size: .95rem;
}

</style>
