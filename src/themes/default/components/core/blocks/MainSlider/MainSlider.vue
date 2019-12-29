<template>
  <section class="main-slider w-100">
    <no-ssr>
      <carousel
        :per-page="1"
        :navigation-enabled="true"
        :pagination-enabled="false"
        :autoplay-hover-pause="true"
        :autoplay-timeout="3000"
        :speed="1000"
      >
        <slide v-for="(slide, index) in slides" :key="index">
          <a
            class="item"
            :href="slide.link"
            v-lazy:background-image="slide.image"
          />
        </slide>
      </carousel>
    </no-ssr>
  </section>
</template>

<script>
import NoSSR from 'vue-no-ssr';
import sliderData from 'theme/resource/slider.json';

export default {
  data () {
    return {
      currentSlide: 1,
      slides: [],
      totalSlides: 1
    };
  },
  components: {
    Carousel: () => import('vue-carousel').then(Slider => Slider.Carousel),
    Slide: () => import('vue-carousel').then(Slider => Slider.Slide),
    'no-ssr': NoSSR
  },
  methods: {
    updateSliderData (data) {
      this.slides = data.slides;
      this.totalSlides = data.total;
    }
  },
  mounted () {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    }, 5000);
  },
  created () {
    this.updateSliderData(sliderData);
  }
};
</script>
<style lang="scss">
.main-slider {
  .VueCarousel {
    .VueCarousel-wrapper {
      .VueCarousel-inner {
        .VueCarousel-slide {
          .item {
            height: 282px;
            display: block;
            background-position: center;
            @media (max-width: 768px) {
              height: 200px;
              background-size: cover;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
    .VueCarousel-navigation {
      .VueCarousel-navigation-button {
        opacity: 0;
        top: 0px;
        bottom: 0px;
        margin: auto;
        width: 57px;
        height: 57px;
        text-indent: -99999px;
        border: solid 3px #fff;
        border-radius: 100%;
        transform: none !important;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        @media (max-width: 768px) {
          opacity: 0.8;
        }
        &.VueCarousel-navigation-next {
          right: 50px;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNy43NzkgMjIuNjc5Ij4KICA8cGF0aCBpZD0iT3BfY29tcG9uZW50XzEiIGRhdGEtbmFtZT0iT3AgY29tcG9uZW50IDEiIGQ9Ik0xODQ1LjEzOSwzMzUuMzM1YTIuODI1LDIuODI1LDAsMCwwLS45MDUsMi4wNTQsMi43MjQsMi43MjQsMCwwLDAsLjY0NiwxLjc2MWwzLjQ2Miw0LjEySDE4MzIuN2EyLjczLDIuNzMsMCwwLDAsMCw1LjQ1OWgxNS42NDFsLTMuNDU2LDQuMTEzYTIuNjYzLDIuNjYzLDAsMCwwLS42NzUsMS43NzksMi42ODUsMi42ODUsMCwwLDAsMi43MjMsMi43LDIuNTkzLDIuNTkzLDAsMCwwLDIuMDUyLS45MTdMMTg1Ny44LDM0NmwtOC44MS0xMC40YTIuNjU2LDIuNjU2LDAsMCwwLTMuODMyLS4yODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTgzMC4wMTggLTMzNC42MzcpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=")
            no-repeat;
          background-size: 27px 22px;
          background-position: center;
          @media (max-width: 768px) {
            right: 20px;
            &.VueCarousel-navigation--disabled {
              opacity: 0;
            }
          }
        }
        &.VueCarousel-navigation-prev {
          left: 50px;
          background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNy43NzkgMjIuNjc5Ij4KICA8cGF0aCBpZD0iT3BfY29tcG9uZW50XzEiIGRhdGEtbmFtZT0iT3AgY29tcG9uZW50IDEiIGQ9Ik05MS44NjEsMzM1LjMzNWEyLjgyNSwyLjgyNSwwLDAsMSwuOTA1LDIuMDU0LDIuNzI0LDIuNzI0LDAsMCwxLS42NDYsMS43NjFsLTMuNDYyLDQuMTJIMTA0LjNhMi43MywyLjczLDAsMCwxLDAsNS40NTlIODguNjU5bDMuNDU2LDQuMTEzYTIuNjY0LDIuNjY0LDAsMCwxLC42NzUsMS43NzksMi42ODUsMi42ODUsMCwwLDEtMi43MjMsMi43LDIuNTk0LDIuNTk0LDAsMCwxLTIuMDUyLS45MTdMNzkuMiwzNDZsOC44MS0xMC40YTIuNjU2LDIuNjU2LDAsMCwxLDMuODMyLS4yODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzkuMjAzIC0zMzQuNjM3KSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K")
            no-repeat;
          background-size: 27px 22px;
          background-position: center;
          @media (max-width: 768px) {
            left: 20px;
          }
        }
      }
    }
    @media (min-width: 769px) {
      &:hover {
        .VueCarousel-navigation {
          .VueCarousel-navigation-button {
            opacity: 0.8;
            &:hover{
              background-color: rgba(#fff, 0.4);
            }
            &.VueCarousel-navigation--disabled {
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
