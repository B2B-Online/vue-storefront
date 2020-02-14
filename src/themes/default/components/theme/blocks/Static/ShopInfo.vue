<template>
  <div class="shop-info">
    <div class="container">
      <no-ssr>
        <carousel
          :autoplay="true"
          :loop="true"
          :pagination-enabled="false"
          :per-page-custom="[
            [0, 1],
            [576, 2],
            [992, 4]
          ]"
          :speed="1000"
          :autoplay-timeout="5000"
          class="highlights"
        >
          <slide>
            <div class="highlight highlight--delivery">
              <h1 class="highlight__title">
                Dostawa Gratis
              </h1>
              <p class="highlight__text">
                od 300 zł brutto
              </p>
            </div>
          </slide>
          <slide>
            <div class="highlight highlight--return">
              <h1 class="highlight__title">
                30 dni na zwrot
              </h1>
              <p class="highlight__text">
                Bez podania przyczyny
              </p>
            </div>
          </slide>
          <slide>
            <div class="highlight highlight--warranty">
              <h1 class="highlight__title">
                Garancja oryginalności
              </h1>
              <p class="highlight__text">
                Sprzedajemy tylko oryginalne produkty
              </p>
            </div>
          </slide>
          <slide>
            <div class="highlight highlight--security">
              <h1 class="highlight__title">
                Bezpieczne zakupy
              </h1>
              <p class="highlight__text">
                Ochrona do 10 tys. zł i min. 2 lata gwarancji
              </p>
            </div>
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import NoSSR from "vue-no-ssr";

export default {
  name: "ShopInfo",

  components: {
    Carousel: () => import("vue-carousel").then(Slider => Slider.Carousel),
    Slide: () => import("vue-carousel").then(Slider => Slider.Slide),
    'no-ssr': NoSSR
  }
};
</script>

<style lang="scss" scoped>
.shop-info {
  background: #f7f9fc;
}

.highlights {
  list-style: none;
  margin: 0 auto;
  padding: 10px 0;
  max-width: 1130px;

  @media only screen and (max-width: 575px) {
    .VueCarousel-slide {
      text-align: center;
    }
  }

  @media only screen and (min-width: 992px) {
    .VueCarousel-slide {
      flex-basis: auto;

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .VueCarousel-slide {
      flex: 1;
    }
  }
  @media only screen and (min-width: 1200px) {
    .VueCarousel-slide {
      &:not(:last-of-type) {
        margin-right: 40px;
      }
    }
  }
}

.highlight {
  color: #000000;
  position: relative;
  padding: 10px 10px 10px 40px;

  @media only screen and (max-width: 575px) {
    display: inline-block;
    text-align: left;
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: normal;
    margin: 0;
  }

  &__text {
    font-size: 14px;
    line-height: 18px;
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  &--delivery {
    padding: 10px 10px 10px 80px;

    &:before {
      background: url("/assets/atat/delivery.svg") no-repeat;
      width: 68px;
      height: 36px;
      left: 0;
    }
  }

  &--return {
    &:before {
      background: url("/assets/atat/return.svg") no-repeat;
      width: 27px;
      height: 29px;
    }
  }
  &--warranty {
    &:before {
      background: url("/assets/atat/warranty.svg") no-repeat;
      width: 29px;
      height: 36px;
    }
  }
  &--security {
    &:before {
      background: url("/assets/atat/security.svg") no-repeat;
      width: 32px;
      height: 35px;
    }
  }
}
</style>
