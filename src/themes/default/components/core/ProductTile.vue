<template>
  <div
    class="product relative align-center w-100"
    v-observe-visibility="visibilityChanged"
  >
    <div
      class="block no-underline product__link"
      @click="goTo($event, productLink)"
    >
      <badge :product="product" />
      <div
        class="product-image relative"
        :class="[
          { sale: labelsActive && isOnSale },
          { new: labelsActive && isNew }
        ]"
      >
        <product-image
          class="product-image__content"
          :image="thumbnailObj"
          :alt="product.name | htmlDecode"
          data-testid="productImage"
        />
      </div>

      <router-link :to="productLink" class="product__name" v-if="!onlyImage">
        {{ product.name | htmlDecode }}
      </router-link>

      <div class="row align-items-center middle-xs ">
        <div class="col-xs-6 price center">
          <span
            class="price--original"
            v-if="
              product.special_price &&
                parseFloat(product.originalPriceInclTax) > 0 &&
                !onlyImage
            "
          >
            {{ product.originalPriceInclTax | price }}
          </span>

          <span
            class="price--special"
            v-if="
              product.special_price &&
                parseFloat(product.special_price) > 0 &&
                !onlyImage
            "
          >
            {{ product.priceInclTax | price }}
          </span>

          <span
            class="price--standard"
            v-if="
              !product.special_price &&
                parseFloat(product.priceInclTax) > 0 &&
                !onlyImage
            "
          >
            {{ product.priceInclTax | price }}
          </span>
        </div>
        <div class="col-xs-6">
          <add-to-cart
            :product="product"
            :disabled="$v.product.qty.$error && !$v.product.qty.minValue"
            class="product-add-to-cart btn--orange btn--small btn--add-to-cart"
          />
        </div>
      </div>
    </div>
    <!-- {{product}} -->
  </div>
</template>

<script>
import rootStore from "@vue-storefront/core/store";
import { ProductTile } from "@vue-storefront/core/modules/catalog/components/ProductTile.ts";
import config from "config";
import ProductImage from "./ProductImage";
import AddToCart from "theme/components/core/AddToCart";
import Badge from "theme/components/core/Badge";

import { minValue } from "vuelidate/lib/validators";

export default {
  mixins: [ProductTile],
  components: {
    ProductImage,
    AddToCart,
    Badge
  },
  props: {
    labelsActive: {
      type: Boolean,
      default: true
    },
    onlyImage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    thumbnailObj() {
      return {
        src: this.thumbnail,
        loading: this.thumbnail
      };
    }
  },
  methods: {
    goTo(event, link) {
      if (event.target.classList.contains("product-add-to-cart")) {
        return false;
      }
      this.$router.push({ path: link });
    },
    onProductPriceUpdate(product) {
      if (product.sku === this.product.sku) {
        Object.assign(this.product, product);
      }
    },
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        if (
          config.products.configurableChildrenStockPrefetchDynamic &&
          rootStore.products.filterUnavailableVariants
        ) {
          const skus = [this.product.sku];
          if (
            this.product.type_id === "configurable" &&
            this.product.configurable_children &&
            this.product.configurable_children.length > 0
          ) {
            for (const confChild of this.product.configurable_children) {
              const cachedItem = rootStore.state.stock.cache[confChild.id];
              if (typeof cachedItem === "undefined" || cachedItem === null) {
                skus.push(confChild.sku);
              }
            }
            if (skus.length > 0) {
              rootStore.dispatch("stock/list", { skus: skus }); // store it in the cache
            }
          }
        }
      }
    }
  },
  validations: {
    product: {
      qty: {
        minValue: minValue(1)
      }
    }
  },
  beforeMount() {
    this.$bus.$on("product-after-priceupdate", this.onProductPriceUpdate);
  },
  beforeDestroy() {
    this.$bus.$off("product-after-priceupdate", this.onProductPriceUpdate);
  }
};
</script>

<style lang="scss" scoped>
.product {
  &__link {
    padding: 20px;
    cursor: pointer;
  }
  &__name {
    margin: 20px 0px;
    display: block;
    color: #000000;
    font-size: 18px;
  }
  &__link {
    @media (min-width: 768px) {
      .product-image {
        &__content {
          transition: all 0.5s ease-in-out;
        }
      }
      &:hover {
        .product-image {
          &__content {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .price{
    &--standard{
      color: #0B5CA2;
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
