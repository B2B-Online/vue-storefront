<template>
  <div class="main-category-menu">
    <router-link
      :to="localizedRoute('/elektryka')"
      class="main-category-menu__elem main-category-menu__elem--electric"
    >
      <h3 class="main-category-menu__title icon icon--electric">
        {{ $t("Electricity") }}
      </h3>
    </router-link>
    <router-link
      :to="localizedRoute('/elektryka/oprawy-oswietleniowe-konsumenckie')"
      class="main-category-menu__elem main-category-menu__elem--lights"
    >
      <h3 class="main-category-menu__title icon icon--lights">
        {{ $t("Oświetlenie") }}
      </h3>
    </router-link>
    <router-link
      :to="localizedRoute('/chemia')"
      class="main-category-menu__elem main-category-menu__elem--chemistry"
    >
      <h3 class="main-category-menu__title icon icon--chemistry">
        {{ $t("Chemistry") }}
      </h3>
    </router-link>
    <router-link
      :to="localizedRoute('/spozywcze')"
      class="main-category-menu__elem main-category-menu__elem--food"
    >
      <h3 class="main-category-menu__title icon icon--food">
        {{ $t("Food") }}
      </h3>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.main-category-menu {
  &__elem {
    display: flex;
    height: 60px;
    max-width: 328px;
    margin: auto;
    box-sizing: border-box;
    margin-bottom: 20px;
    position: relative;
    transition: all 0.2s ease-in;
    align-items: center;
    border-radius: 7px;
    &--electric {
      background: url("/assets/atat/bg_elektryka.png") no-repeat;
      background-position: center;
      background-size: cover;
    }
    &--lights {
      background: url("/assets/atat/bg_oswietlenie.png") no-repeat;
      background-position: center;
      background-size: cover;
    }
    &--chemistry {
      background: url("/assets/atat/bg_chemia.png") no-repeat;
      background-position: center;
      background-size: cover;
    }
    &--food {
      background: url("/assets/atat/bg_zywnosc.png") no-repeat;
      background-position: center;
      background-size: cover;
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
      left: 20px;
      margin: auto;
    }
    &--electric {
      &:before {
        left: 30px;
        top: 0px;
        bottom: 0px;
        width: 20px;
        height: 34px;
        background: url("/assets/atat/ico_elektryka.svg") no-repeat;
        background-position: center;
      }
    }
    &--lights {
      &:before {
        top: 0px;
        bottom: 0px;
        width: 37px;
        height: 39px;
        background: url("/assets/atat/ico_oswietlenie.svg") no-repeat;
        background-position: center;
      }
    }
    &--chemistry {
      &:before {
        left: 27px;
        top: 0px;
        bottom: 0px;
        width: 23px;
        height: 34px;
        background: url("/assets/atat/ico_chemia.svg") no-repeat;
        background-position: center;
      }
    }
    &--food {
      &:before {
        left: 25px;
        top: 0px;
        bottom: 0px;
        width: 27px;
        height: 27px;
        background: url("/assets/atat/ico_zywnosc.svg") no-repeat;
        background-position: center;
      }
    }
  }
  &__title {
    text-align: center;
    margin: 0px;
    padding: 0px;
    font-size: 20x;
    font-family: "Roboto";
    font-weight: 400;
    color: #fff;
    padding-left: 70px;
  }
}
</style>
