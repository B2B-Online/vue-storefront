<template>
  <div>
    <header-simple />
    <shop-info />
    <main-slider />
    <div class="container main_category">
      <div class="flex main_category__boxes between-xs">
        <router-link
          :to="localizedRoute('/elektryka')"
          class="main_category__elem main_category__elem--electric"
        >
          <h3 class="main_category__title icon icon--electric">
            {{ $t("Electricity") }}
          </h3>
        </router-link>
        <router-link
          :to="localizedRoute('/elektryka/oprawy-oswietleniowe-konsumenckie')"
          class="main_category__elem main_category__elem--lights"
        >
          <h3 class="main_category__title icon icon--lights">
            {{ $t("Oświetlenie") }}
          </h3>
        </router-link>
        <router-link
          :to="localizedRoute('/chemia')"
          class="main_category__elem main_category__elem--chemistry"
        >
          <h3 class="main_category__title icon icon--chemistry">
            {{ $t("Chemistry") }}
          </h3>
        </router-link>
        <router-link
          :to="localizedRoute('/spozywcze')"
          class="main_category__elem main_category__elem--food"
        >
          <h3 class="main_category__title icon icon--food">
            {{ $t("Food") }}
          </h3>
        </router-link>
      </div>
    </div>
    <manufacturer-slider :css-class="['manufacturer-slider', 'w-100']" :manufacturers="manufacturers" />
    <main-footer />
  </div>
</template>
<script>
import HeaderSimple from 'theme/components/theme/blocks/Static/HeaderSimple';
import MainSlider from 'theme/components/core/blocks/MainSlider/MainSlider'
import ShopInfo from 'theme/components/theme/blocks/Static/ShopInfo';
import MainFooter from 'theme/components/core/blocks/Footer/Footer';
import ManufacturerSlider from 'theme/components/core/blocks/MultiSlider/ManufacturerSlider';

export default {
  components: {
    HeaderSimple,
    ShopInfo,
    MainFooter,
    ManufacturerSlider,
    MainSlider
  },
  data () {
    return {
      manufacturers: [
        {
          link: 'abinbev',
          image: '/assets/atat/loga/abinbev.png'
        },
        {
          link: 'alcatel',
          image: '/assets/atat/loga/alcatel.png'
        },
        {
          link: 'alstom',
          image: '/assets/atat/loga/alstom.png'
        },
        {
          link: 'armstrong',
          image: '/assets/atat/loga/armstrong.png'
        },
        {
          link: 'astrazeneca',
          image: '/assets/atat/loga/astrazeneca.png'
        },
        {
          link: 'bayer',
          image: '/assets/atat/loga/bayer.png'
        },
        {
          link: 'cooper',
          image: '/assets/atat/loga/cooper.png'
        },
        {
          link: 'dsm',
          image: '/assets/atat/loga/dsm.png'
        },
        {
          link: 'eaton',
          image: '/assets/atat/loga/eaton.png'
        },
        {
          link: 'electrolux',
          image: '/assets/atat/loga/electrolux.png'
        },
        {
          link: 'evonik',
          image: '/assets/atat/loga/evonik.png'
        },
        {
          link: 'federalmogul',
          image: '/assets/atat/loga/federalmogul.png'
        },
        {
          link: 'finisar',
          image: '/assets/atat/loga/finisar.png'
        },
        {
          link: 'henkel',
          image: '/assets/atat/loga/henkel.png'
        },
        {
          link: 'hp',
          image: '/assets/atat/loga/hp.png'
        }
      ]
    }
  }
};
</script>

<style lang="scss" >
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
