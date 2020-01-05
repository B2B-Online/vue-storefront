<template>
  <div class="collection">
    <header class="collection__header">
      <h2 class="collection__title">
        <a :href="linkMore" v-if="linkMore != ''">{{ title }}</a>
      </h2>
      <a :href="linkMore" v-if="linkMore != ''" class="collection__link-more">{{
        linkMoreText
      }}</a>
    </header>
    <div class="collection__slider">
      <no-ssr>
        <carousel v-bind="config" @pageChange="setMuted">
          <slide v-for="product in products" :key="product.id">
            <product-tile
              class="collection-product"
              :product="product"
              :labels-active="false"
              :only-image="false"
            />
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr';
import ProductTile from 'theme/components/core/ProductTile';

export default {
  name: 'ProductsSlider',
  props: {
    title: {
      type: String,
      default: ''
    },
    linkMore: {
      type: String,
      default: ''
    },
    linkMoreText: {
      type: String,
      default: ''
    },
    products: {
      type: Array,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  },
  components: {
    Carousel: () => import('vue-carousel').then(Slider => Slider.Carousel),
    Slide: () => import('vue-carousel').then(Slider => Slider.Slide),
    ProductTile,
    'no-ssr': NoSSR
  },
  data () {
    return {
      currentPage: 0
    };
  },
  methods: {
    setMuted (currentPage) {
      this.currentPage = currentPage;
    }
  }
};
</script>

<style lang="scss" scope>
.collection {
  margin-bottom: 30px;
  border: solid 1px #cbd3dd;
  border-radius: 5px;
  &__header {
    background: #f7f9fc;
    border-bottom: solid 1px #cbd3dd;
    display: block;
    padding: 0px 25px;
    border-radius: 7px 7px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
  }
  &__title {
    margin: 0px;
    padding: 0px;
    font-size: 22px;
    font-weight: 400;
    color: #000000;
  }
  &__link-more {
    display: block;
    position: relative;
    padding-right: 25px;
    &::after {
      right: 0px;
      width: 17px;
      height: 7px;
      top: 0px;
      bottom: 0px;
      margin: auto;
      content: "";
      position: absolute;
      background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNyA3Ij4KICA8cGF0aCBpZD0iU2hhcGVfMTQiIGRhdGEtbmFtZT0iU2hhcGUgMTQiIGQ9Ik0xNjM0LjkwOSwxMDg0djIuNzQ2SDE2MjNWMTA4OGwxMS45MDktLjA5NFYxMDkxbDUuMDktMy42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2MjMgLTEwODQpIiBmaWxsPSIjNjI2ZDc5Ii8+Cjwvc3ZnPgo=");
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      &::after {
        right: -5px;
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  &__slider {
    .VueCarousel-navigation {
      position: absolute;
      top: -42px;
      right: 250px;
      @media (max-width: 768px) {
        right: 10px;
      }
      .VueCarousel-navigation-button {
        width: 21px;
        height: 21px;
        text-indent: -9999px;
        transform: none !important;
        top: 0px !important;
        margin: 0px !important;
        &.VueCarousel-navigation-prev {
          right: 28px;
          left: auto;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAyMSI+CiAgPHBhdGggaWQ9Ik9wX2NvbXBvbmVudF8xIiBkYXRhLW5hbWU9Ik9wIGNvbXBvbmVudCAxIiBkPSJNMTM5MC45LDYxNy42MzlhMS4wMTQsMS4wMTQsMCwwLDEsLjMzNC43NDMuOTc2Ljk3NiwwLDAsMS0uMjM4LjYzN2wtMS4yNzYsMS40OTFoNS43NjJhLjk4OC45ODgsMCwwLDEsMCwxLjk3N2gtNS43NjJsMS4yNzMsMS40ODlhLjk1My45NTMsMCwwLDEsLjI0OS42NDQuOTc2Ljk3NiwwLDAsMS0uMzQ5Ljc0NiwxLjAwNiwxLjAwNiwwLDAsMS0uNjU0LjIzLjk2Mi45NjIsMCwwLDEtLjc1Ni0uMzMybC0zLjI0Ny0zLjc2NSwzLjI0NS0zLjc2NGEuOTkxLjk5MSwwLDAsMSwxLjQxMi0uMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzgxIC02MTEpIiBmaWxsPSIjYTRiMWMyIi8+CiAgPHBhdGggaWQ9Ik9wX2NvbXBvbmVudF8yIiBkYXRhLW5hbWU9Ik9wIGNvbXBvbmVudCAyIiBkPSJNMTM5OC45MjUsNjE0LjA3NUExMC41LDEwLjUsMCwxLDEsMTM5MS41LDYxMSwxMC40MzEsMTAuNDMxLDAsMCwxLDEzOTguOTI1LDYxNC4wNzVabS0xNS45NDgsNy40MjVhOC41MjMsOC41MjMsMCwxLDAsOC41MjMtOC41MjNBOC41MzMsOC41MzMsMCwwLDAsMTM4Mi45NzcsNjIxLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM4MSAtNjExKSIgZmlsbD0iI2E0YjFjMiIvPgo8L3N2Zz4K")
            no-repeat;
        }
        &.VueCarousel-navigation-next {
          right: 0px;
          left: auto;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMSAyMSI+CiAgPHBhdGggaWQ9Ik9wX2NvbXBvbmVudF8xIiBkYXRhLW5hbWU9Ik9wIGNvbXBvbmVudCAxIiBkPSJNMTQyMC4xLDYxNy42MzlhMS4wMTQsMS4wMTQsMCwwLDAtLjMzNC43NDMuOTc2Ljk3NiwwLDAsMCwuMjM4LjYzN2wxLjI3NSwxLjQ5MWgtNS43NjJhLjk4OC45ODgsMCwwLDAsMCwxLjk3N2g1Ljc2MmwtMS4yNzMsMS40ODlhLjk1NC45NTQsMCwwLDAtLjI0OS42NDQuOTc2Ljk3NiwwLDAsMCwuMzQ5Ljc0NiwxLjAwNywxLjAwNywwLDAsMCwuNjU0LjIzLjk2Mi45NjIsMCwwLDAsLjc1Ni0uMzMybDMuMjQ3LTMuNzY1LTMuMjQ1LTMuNzY0YS45OS45OSwwLDAsMC0xLjQxMi0uMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDA5IC02MTEpIiBmaWxsPSIjYTRiMWMyIi8+CiAgPHBhdGggaWQ9Ik9wX2NvbXBvbmVudF8yIiBkYXRhLW5hbWU9Ik9wIGNvbXBvbmVudCAyIiBkPSJNMTQxMi4wNzUsNjE0LjA3NUExMC41LDEwLjUsMCwxLDAsMTQxOS41LDYxMSwxMC40MzIsMTAuNDMyLDAsMCwwLDE0MTIuMDc1LDYxNC4wNzVabTE1Ljk0OCw3LjQyNWE4LjUyMyw4LjUyMywwLDEsMS04LjUyMy04LjUyM0E4LjUzMyw4LjUzMywwLDAsMSwxNDI4LjAyMyw2MjEuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDA5IC02MTEpIiBmaWxsPSIjYTRiMWMyIi8+Cjwvc3ZnPgo=")
            no-repeat;
        }
      }
    }
  }
}
</style>
