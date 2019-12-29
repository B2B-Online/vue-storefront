<template>
  <section :class="cssClass">
    <no-ssr>
      <carousel
        :per-page="1"
        :autoplay="true"
        :per-page-custom="perPageCustom"
        :pagination-enabled="false"
        :autoplay-hover-pause="true"
        :loop="true"
        :scroll-per-page="false"
        :autoplay-timeout="3000"
        :speed="1000"
      >
        <slide v-for="(slide, index) in manufacturers" :key="index">
          <a
            :href="slide.link"
            class="item no-underline"
            v-lazy:background-image="slide.image"
          />
        </slide>
      </carousel>
    </no-ssr>
  </section>
</template>
<script>
import NoSSR from 'vue-no-ssr';
export default {
  components: {
    Carousel: () => import('vue-carousel').then(Slider => Slider.Carousel),
    Slide: () => import('vue-carousel').then(Slider => Slider.Slide),
    'no-ssr': NoSSR
  },
  data () {
    return {
      perPageCustom: [
        [400, 2],
        [768, 3],
        [1024, 6],
        [1200, 10],
        [1400, 12]
      ]
    };
  },
  props: {
    cssClass: {
      type: Array,
      required: false,
      default: () => { return [] }
    },
    manufacturers: {
      type: Array,
      required: true
    }
  },
  mounted () {}
};
</script>
<style lang="scss" scope>
.manufacturer-slider {
  border-top: solid 1px #cbd3dd;
  .VueCarousel {
    .VueCarousel-wrapper {
      .VueCarousel-slide {
        .item {
          box-sizing: border-box;
          margin: 10px 0px;
          padding: 0px 10px;
          height: 79px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: auto;
          display: block;
          &:hover {
            border: none;
          }
        }
      }
    }
  }
}
</style>
