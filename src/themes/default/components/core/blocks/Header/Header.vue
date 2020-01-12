<template>
  <div class="header">
    <header
      class="fixed w-100 flex middle-xs"
      :class="{ 'is-visible': navVisible }"
    >
      <div class="container-fluid px15 middle-xs w-100">
        <div
          class="row between-xs middle-xs"
          v-if="!isCheckoutPage || isThankYouPage"
        >
          <div class="col-md-4 col-xs-2 ">
            <div class="logo">
              <logo width="auto" height="58px" class="logo__img px15" />
              <h2 class="logo__text">
                Przedsiębiorstwo Handlowe A-T S.A.<br />
                <span>już 28 lat na rynku!</span>
              </h2>
            </div>
          </div>
          <div class="col-md-4 col-xs-2 end-xs">
            <div class="inline-flex right-icons">
              <search-icon class="pointer btn__top" />
              <wishlist-icon class="hidden-xs pointer btn__top" />
              <compare-icon class="pointer btn__top" />
              <microcart-icon class="pointer btn__top" />
              <account-icon class="pointer hidden-xs btn__top" />
              <hamburger-icon class="pointer btn__top  btn__top--orange" />
            </div>
          </div>
          <div class="flex link-with-icon">
            <router-link
              :to="localizedRoute('/')"
              class="link-with-icon__shops"
            >
              {{ $t("SKLEPY STACJONARNE") }}
            </router-link>
            <router-link
              :to="localizedRoute('/')"
              class="link-with-icon__goods"
            >
              {{ $t("TOWARY W SKLEPIE STACJONARNYM") }}
            </router-link>
          </div>
        </div>
        <div
          class="row between-xs middle-xs px15 py5"
          v-if="isCheckoutPage && !isThankYouPage"
        >
          <div class="col-xs-5 col-md-3 middle-xs">
            <div>
              <router-link :to="localizedRoute('/')" class="cl-tertiary links">
                {{ $t("Return to shopping") }}
              </router-link>
            </div>
          </div>
          <div class="col-xs-2 col-md-6 center-xs">
            <logo width="auto" height="58px" />
          </div>
          <div class="col-xs-5 col-md-3 end-xs">
            <div>
              <a
                v-if="!currentUser"
                href="#"
                @click.prevent="gotoAccount"
                class="cl-tertiary links"
              >
                {{ $t("Login to your account") }}
              </a>
              <span v-else>
                {{ $t("You are logged in as") }} {{ currentUser.firstname }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CurrentPage from "theme/mixins/currentPage";
import AccountIcon from "theme/components/core/blocks/Header/AccountIcon";
import CompareIcon from "theme/components/core/blocks/Header/CompareIcon";
import HamburgerIcon from "theme/components/core/blocks/Header/HamburgerIcon";
import Logo from "theme/components/core/Logo";
import MicrocartIcon from "theme/components/core/blocks/Header/MicrocartIcon";
import SearchIcon from "theme/components/core/blocks/Header/SearchIcon";
import WishlistIcon from "theme/components/core/blocks/Header/WishlistIcon";

export default {
  name: "Header",
  components: {
    AccountIcon,
    CompareIcon,
    HamburgerIcon,
    Logo,
    MicrocartIcon,
    SearchIcon,
    WishlistIcon
  },
  mixins: [CurrentPage],
  data() {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54
    };
  },
  computed: {
    ...mapState({
      isOpenLogin: state => state.ui.signUp,
      currentUser: state => state.user.current
    }),
    isThankYouPage() {
      return this.$store.state.checkout.isThankYouPage
        ? this.$store.state.checkout.isThankYouPage
        : false;
    }
  },
  beforeMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.isScrolling = true;
      },
      { passive: true }
    );

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled();
        this.isScrolling = false;
      }
    }, 250);
  },
  methods: {
    gotoAccount() {
      this.$bus.$emit("modal-toggle", "modal-signup");
    },
    hasScrolled() {
      this.scrollTop = window.scrollY;
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false;
      } else {
        this.navVisible = true;
      }
      this.lastScrollTop = this.scrollTop;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
$color-icon-hover: color(secondary, $colors-background);

header {
  height: 100px;
  top: -101px;
  z-index: 2;
  transition: top 0.2s ease-in-out;
  background: #fff;
  border-bottom: solid 1px #cbd3dd;
  &.is-visible {
    top: 0;
  }
  .logo {
    position: relative;
    &__text {
      position: absolute;
      display: inline-block;
      top: 10px;
      left: 110px;
      margin: 0px;
      font-size: 16px;
      font-weight: 300;
      color: #0b5ca2;
      width: 300px;
      span {
        color: #000000;
      }
      @media (max-width: 767px) {
        visibility: hidden;
      }
    }
  }
}
.right-icons {
  //for edge
  float: right;
}
.header-placeholder {
  height: 100px;
}
.links {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .row.middle-xs {
    margin: 0 -15px;

    &.py5 {
      margin: 0;
    }
  }
  .col-xs-2:first-of-type {
    padding-left: 0;
  }
  .col-xs-2:last-of-type {
    padding-right: 0;
  }
  a,
  span {
    font-size: 12px;
  }
}
@media (max-width: 1100px) {
  .link-with-icon {
    display: none;
  }
}
.link-with-icon {
  position: absolute;
  right: 370px;
  &__shops {
    display: inline-block;
    width: 110px;
    position: relative;
    padding-left: 34px;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    margin-right: 10px;
    &::before {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      margin: auto;
      content: "";
      display: block;
      width: 28px;
      height: 28pxxxxxxxxxx;
      background: url("/assets/atat/ico_marker.svg") no-repeat;
      background-size: 100%;
    }
  }
  &__goods {
    display: inline-block;
    width: 130px;
    padding-left: 37px;
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
    &::before {
      position: absolute;
      top: 0px;
      bottom: 0px;
      margin: auto;
      left: 0px;
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      background: url("/assets/atat/ico_goods.svg") no-repeat;
      background-size: 100%;
    }
  }
}
</style>
