<template>
  <div>
    <header-simple />
    <shop-info />
    <div class="container main_category">
      <div class="flex main_category__boxes between-xs">
        <router-link
          :to="localizedRoute('/c/elektryka')"
          class="main_category__elem  main_category__elem--electric"
        >
          <h3 class="main_category__title icon icon--electric">
            {{ $t("Electricity") }}
          </h3>
        </router-link>
        <router-link
          :to="localizedRoute('/c/oprawy-oswietleniowe-konsumenckie')"
          class="main_category__elem main_category__elem--lights"
        >
          <h3 class="main_category__title icon icon--lights">
            {{ $t("Oświetlenie") }}
          </h3>
        </router-link>
        <router-link
          :to="localizedRoute('/c/chemia')"
          class="main_category__elem main_category__elem--chemistry"
        >
          <h3 class="main_category__title icon icon--chemistry">
            {{ $t("Chemistry") }}
          </h3>
        </router-link>
        <router-link
          :to="localizedRoute('/c/spozywcze')"
          class="main_category__elem main_category__elem--food"
        >
          <h3 class="main_category__title icon icon--food">
            {{ $t("Food") }}
          </h3>
        </router-link>
      </div>
    </div>
    <main-footer />
  </div>
</template>
<script>
import HeaderSimple from 'theme/components/theme/blocks/Static/HeaderSimple';
import ShopInfo from 'theme/components/theme/blocks/Static/ShopInfo';
import MainFooter from 'theme/components/core/blocks/Footer/Footer';

export default {
  components: {
    HeaderSimple,
    ShopInfo,
    MainFooter
  }
};
</script>

<style lang="scss" scoped>
.main_category {
  &__boxes {
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  &__elem {
    display: block;
    max-width: 690px;
    width: 49%;
    height: 174px;
    box-sizing: border-box;
    margin-bottom: 20px;
    position: relative;
    transition: all 0.2s ease-in;
    &--electric {
      background: url("/assets/atat/bg_elektryka.png") no-repeat;
      background-position: center;
    }
    &--lights {
      background: url("/assets/atat/bg_oswietlenie.png") no-repeat;
      background-position: center;
    }
    &--chemistry {
      background: url("/assets/atat/bg_chemia.png") no-repeat;
      background-position: center;
    }
    &--food {
      background: url("/assets/atat/bg_zywnosc.png") no-repeat;
      background-position: center;
    }
    @media (max-width: 991px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      &:hover {
        transform: scale(1.02);
      }
    }
  }
  .icon {
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0px;
      right: 0px;
      margin: auto;
    }
    &--electric {
      &:before {
        top: -75px;
        width: 40px;
        height: 68px;
        background: url("/assets/atat/ico_elektryka.svg") no-repeat;
        background-position: center;
      }
    }
    &--lights {
      &:before {
        top: -90px;
        width: 81px;
        height: 86px;
        background: url("/assets/atat/ico_oswietlenie.svg") no-repeat;
        background-position: center;
      }
    }
    &--chemistry {
      &:before {
        top: -80px;
        width: 49px;
        height: 73px;
        background: url("/assets/atat/ico_chemia.svg") no-repeat;
        background-position: center;
      }
    }
    &--food {
      &:before {
        top: -60px;
        width: 49px;
        height: 49px;
        background: url("/assets/atat/ico_zywnosc.svg") no-repeat;
        background-position: center;
      }
    }
  }
  &__title {
    width: 180px;
    text-align: center;
    margin: 0px;
    padding: 0px;
    font-size: 30px;
    font-family: "Roboto";
    font-weight: 400;
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: #fff;
  }
}
</style>
