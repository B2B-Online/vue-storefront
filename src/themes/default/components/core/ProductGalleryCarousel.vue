<template>
  <div class="media-gallery-carousel">
    <div class="thumbnails">
      <!-- <i class="material-icons p10">
        arrow_upward
      </i> -->
      <ul class="thumbnails__list" :style="thumbnailsListStyle">
        <li
          class="thumbnails__item"
          v-for="(images, index) in gallery"
          :key="images.src"
        >
          <product-image
            :class="{ 'thumb-video': images.video }"
            @click="navigate(index)"
            :image="images"
            :alt="productName | htmlDecode"
          />
        </li>
      </ul>
      <!-- <i class="material-icons p10">
        arrow_downward
      </i> -->
    </div>

    <div class="carousel-wrapper">
      <carousel
        :per-page="1"
        :vertical="true"
        :mouse-drag="false"
        :navigation-enabled="false"
        :pagination-enabled="false"
        ref="carousel"
        :speed="carouselTransitionSpeed"
        @pageChange="pageChange"
      >
        <slide v-for="(images, index) in gallery" :key="images.src">
          <div
            class="product-image-container"
            :class="{
              'video-container w-100 h-100 flex relative': images.video
            }"
          >
            <product-image
              v-show="hideImageAtIndex !== index"
              @dblclick="openOverlay"
              class="product-image pointer"
              :class="{ 'product-image--video': images.video }"
              :image="images"
              :alt="productName | htmlDecode"
            />
            <product-video
              v-if="images.video && index === currentPage"
              v-bind="images.video"
              :index="index"
              @video-started="onVideoStarted"
            />
          </div>
        </slide>
      </carousel>
      <i
        class="zoom-in material-icons p15 cl-bgs-tertiary pointer"
        @click="openOverlay"
        >zoom_in</i
      >
    </div>
  </div>
</template>

<script>
import config from 'config'
import { Carousel, Slide } from 'vue-carousel'
import ProductImage from './ProductImage'
import ProductVideo from './ProductVideo'
import reduce from 'lodash-es/reduce'
import map from 'lodash-es/map'

export default {
  name: 'ProductGalleryCarousel',
  components: {
    Carousel,
    Slide,
    ProductImage,
    ProductVideo
  },
  props: {
    gallery: {
      type: Array,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    configuration: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      carouselTransition: true,
      carouselTransitionSpeed: 0,
      currentColor: 0,
      currentPage: 0,
      hideImageAtIndex: null
    }
  },

  beforeMount() {
    this.$bus.$on('filter-changed-product', this.selectVariant)
    this.$bus.$on('product-after-load', this.selectVariant)
  },
  mounted() {
    this.selectVariant()

    if (this.configuration.color) {
      const { color } = this.configuration
      this.currentColor = color.id
    }

    this.$emit('loaded')
  },
  beforeDestroy() {
    this.$bus.$off('filter-changed-product', this.selectVariant)
    this.$bus.$off('product-after-load', this.selectVariant)
  },
  methods: {
    navigate(index) {
      if (this.$refs.carousel) {
        this.$refs.carousel.goToPage(index)
      }
    },
    selectVariant() {
      if (config.products.gallery.mergeConfigurableChildren) {
        const option = reduce(
          map(this.configuration, 'attribute_code'),
          (result, attribute) => {
            result[attribute] = this.configuration[attribute].id
            return result
          },
          {}
        )
        if (option) {
          let index = this.gallery.findIndex(
            obj =>
              obj.id &&
              Object.entries(obj.id).toString() ===
                Object.entries(option).toString(),
            option
          )
          if (index < 0)
            index = this.gallery.findIndex(
              obj => obj.id && obj.id.color === option.color
            )
          this.navigate(index)
        }
      }
    },
    openOverlay() {
      const currentSlide = this.$refs.carousel.currentPage
      this.$emit('toggle', currentSlide)
    },
    switchCarouselSpeed() {
      const { color } = this.configuration
      if (color && this.currentColor !== color.id) {
        this.currentColor = color.id
        this.carouselTransitionSpeed = 0
      } else {
        this.carouselTransitionSpeed = 500
      }
    },
    pageChange(index) {
      this.switchCarouselSpeed()

      this.currentPage = index
      this.hideImageAtIndex = null
    },
    onVideoStarted(index) {
      this.hideImageAtIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/animations/transitions';
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-gainsboro: color(gainsboro);
$color-white: color(white);

.media-gallery-carousel {
  position: relative;
  text-align: center;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
  }

  .thumbnails {
    display: none;
    @media (min-width: 768px) {
      display: block;
      flex: 0 0 100px;
      margin: 0 20px 0 0;
      background: $color-white;
      height: 508px;
      overflow: auto;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &__item {
      border: 1px solid $color-gainsboro;
      margin-bottom: 2px;
    }
  }
  .carousel-wrapper {
    @media (min-width: 768px) {
      flex: 0 0 calc(100% - 120px);
    }
  }
}
.zoom-in {
  position: absolute;
  bottom: 0;
  right: 0;
}
.product-image {
  mix-blend-mode: multiply;
  opacity: 1;
  will-change: transform;
  transition: 0.3s opacity $motion-main;
  &:hover {
    opacity: 0.9;
  }
  &--video {
    padding-bottom: calc(319% / (568 / 100));
  }
}
.video-container {
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss">
.media-gallery-carousel,
.media-zoom-carousel {
  .VueCarousel-pagination {
    position: absolute;
    bottom: 15px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .VueCarousel-navigation-button {
    margin: 0;
    transform: translateY(-50%) !important;
  }
  .VueCarousel-slide {
    backface-visibility: unset;
  }
  .VueCarousel-navigation {
    opacity: 0;
    &--disabled {
      display: none;
    }
  }
  .VueCarousel-dot {
    padding: 8px !important;
    button {
      border: 2px solid #828282;
    }
  }
  &:hover {
    .VueCarousel-navigation {
      opacity: 0.9;
    }
    .VueCarousel-navigation-button {
      transition: opacity 3s;
      &:after {
        background-color: transparent;
      }
    }
  }
}
</style>
