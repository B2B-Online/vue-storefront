<template>
  <footer :class="{ 'brdr-top-1 brdr-cl-secondary': isCheckoutPage }">
    <div
      class="footer-links flex"
      v-if="!isCheckoutPage"
    >
      <div class="container">
        <div class="row center-xs between-md">
          <div
            class="col-lg-7 col-md-8 col-xs-12 no-mobile center-xs start-md flex"
          >
            <div class="footer-links__box">
              <h3 class="footer-links__title">
                {{ $t('Informacje') }}
              </h3>
              <ul class="footer-links__list">
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Strona główna') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('O firmie') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Pomoc') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Kontakt') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Zwroty i reklamacje') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Śledzenie przesyłki') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Dostawa') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Zużyty sprzęt elektryczny i elektroniczny') }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="footer-links__box">
              <h3 class="footer-links__title">
                {{ $t('Bezpieczeństwo') }}
              </h3>
              <ul class="footer-links__list">
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Regulamin') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Prawo odstąpienia od umowy') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Polityka prywatności') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Polityka plików cookies') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Formularz reklamacji') }}
                  </router-link>
                </li>
                <li class="footer-links__elem">
                  <router-link :to="localizedRoute('/')" exact>
                    {{ $t('Formularz odstąpienia') }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="social center-xs">
            <div class="">
              <a
                class="social-icon brdr-circle no-underline"
                href="https://www.facebook.com/"
                :aria-label="$t('Go to Facebook')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13.316" height="28.316" viewBox="0 0 13.316 28.316">
                  <path id="Op_component_3" data-name="Op component 3" d="M1245.03,1123.575V1121.3a1.194,1.194,0,0,1,1.252-1.352h3.2v-4.855h-4.4c-4.9,0-5.994,3.6-5.994,5.931v2.551h-2.843v5.669h2.873v14.166h5.7v-14.166h4.217l.186-2.228.34-3.442Z" transform="translate(-1236.24 -1115.094)" fill="#626d79" />
                </svg>
              </a>
              <a
                class="social-icon brdr-circle no-underline"
                href="https://www.twitter.com"
                :aria-label="$t('Go to Twitter')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28.407" height="22.648" viewBox="0 0 28.407 22.648">
                  <path id="Op_component_2" data-name="Op component 2" d="M1322.513,1121.1a12.452,12.452,0,0,1-3.343.906,5.731,5.731,0,0,0,2.573-3.178,11.9,11.9,0,0,1-3.713,1.4,5.857,5.857,0,0,0-10.091,3.9,5.958,5.958,0,0,0,.17,1.306,16.562,16.562,0,0,1-12.017-5.973,5.63,5.63,0,0,0,1.787,7.631,5.657,5.657,0,0,1-2.634-.707v.077a5.392,5.392,0,0,0,.4,2.057,5.807,5.807,0,0,0,4.284,3.532,5.739,5.739,0,0,1-1.541.215,5.235,5.235,0,0,1-1.095-.122,5.875,5.875,0,0,0,5.439,3.992,11.814,11.814,0,0,1-7.226,2.441c-.478,0-.924-.031-1.4-.077a16.862,16.862,0,0,0,8.935,2.564,16.2,16.2,0,0,0,16.19-12.806,15.672,15.672,0,0,0,.385-3.455v-.737a12.035,12.035,0,0,0,2.9-2.964Z" transform="translate(-1294.106 -1118.412)" fill="#626d79" />
                </svg>

              </a>
              <a
                class="social-icon brdr-circle no-underline"
                href="https://www.pinterest.com"
                :aria-label="$t('Go to Pinterest')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22.723" height="28.294" viewBox="0 0 22.723 28.294">
                  <path id="Op_component_2" data-name="Op component 2" d="M1374.813,1115.592c-7.979,0-12.031,5.514-12.031,10.137a8.92,8.92,0,0,0,.308,2.442,5.374,5.374,0,0,0,3.143,3.778.564.564,0,0,0,.832-.4c.093-.292.261-1,.354-1.306a.754.754,0,0,0-.231-.906,4.393,4.393,0,0,1-.924-1.69,5.545,5.545,0,0,1-.2-1.5c0-4.1,3.189-7.787,8.3-7.787,4.514,0,7.009,2.657,7.009,6.221a14.554,14.554,0,0,1-.308,3.01c-.708,3.271-2.557,5.637-5.037,5.637a2.544,2.544,0,0,1-2.665-3.133c.247-.967.6-1.981.909-2.964a10.4,10.4,0,0,0,.6-2.8,2.2,2.2,0,0,0-2.295-2.442c-1.8,0-3.251,1.812-3.251,4.208a6.6,6.6,0,0,0,.108,1.2,5.925,5.925,0,0,0,.432,1.383s-1.849,7.541-2.157,8.862a17.439,17.439,0,0,0-.046,6.174c.015.184.277.23.4.092a17.182,17.182,0,0,0,3.05-5.314c.185-.737,1.187-4.484,1.187-4.484a4.813,4.813,0,0,0,4.113,2.043c4.39,0,7.656-3.179,8.72-7.8a14.686,14.686,0,0,0,.37-3.348c0-4.839-4.236-9.307-10.691-9.307Z" transform="translate(-1362.782 -1115.592)" fill="#626d79" />
                </svg>

              </a>
              <a
                class="social-icon brdr-circle no-underline"
                href="https://www.linkedin.com"
                :aria-label="$t('Go to LinkedIn')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25.111" height="25.034" viewBox="0 0 25.111 25.034">
                  <path id="Op_component_2" data-name="Op component 2" d="M1427.027,1130v12.256h5.854v-16.695h-5.854Zm24.972.691c-.386-3.164-1.833-5.13-6.116-5.13-2.511,0-4.206.922-4.914,2.258h-.077v-2.258h-4.668v16.695h4.884v-8.278c0-2.182.431-4.285,3.113-4.285s2.895,2.488,2.895,4.438v8.125h5.023v-9.169a19.482,19.482,0,0,0-.138-2.4Zm-22.045-13.47a2.918,2.918,0,1,0,2.927,2.918,2.922,2.922,0,0,0-2.927-2.918Z" transform="translate(-1427.027 -1117.219)" fill="#626d79" />
                </svg>

              </a>
              <a
                class="social-icon brdr-circle no-underline"
                href="https://www.instagram.com"
                :aria-label="$t('Go to Instagram')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path id="Op_component_2" data-name="Op component 2" d="M1505.04,1121.874a7.852,7.852,0,1,0,7.852,7.852A7.861,7.861,0,0,0,1505.04,1121.874Zm0,13.249a5.4,5.4,0,1,1,5.4-5.4A5.4,5.4,0,0,1,1505.04,1135.123Z" transform="translate(-1493 -1118)" fill="#626d79" />
                  <circle id="Op_component_3" data-name="Op component 3" cx="1.65" cy="1.65" r="1.65" transform="translate(17.64 2.87)" fill="#626d79" />
                  <path id="Op_component_4" data-name="Op component 4" d="M1517,1123.877a5.878,5.878,0,0,0-5.878-5.878h-12.245a5.878,5.878,0,0,0-5.878,5.878v12.244a5.877,5.877,0,0,0,5.878,5.878h12.245a5.878,5.878,0,0,0,5.878-5.878Zm-2.308,12.214a3.6,3.6,0,0,1-3.6,3.6h-12.183a3.6,3.6,0,0,1-3.6-3.6v-12.184a3.6,3.6,0,0,1,3.6-3.6h12.183a3.6,3.6,0,0,1,3.6,3.6Z" transform="translate(-1493 -1118)" fill="#626d79" />
                </svg>

              </a>
              <a
                class="social-icon brdr-circle no-underline"
                href="https://www.allegro.pl"
                :aria-label="$t('Go to Allegro')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36.822" height="12.324" viewBox="0 0 36.822 12.324">
                  <path id="Op_component_2" data-name="Op component 2" d="M1589.748,1127.414a3.378,3.378,0,0,0-5.332,0,3.63,3.63,0,0,0,0,4.1,3.379,3.379,0,0,0,5.332,0,3.631,3.631,0,0,0,0-4.1Zm-1.055,2.82a1.648,1.648,0,0,1-3.222,0,2.376,2.376,0,0,1,0-1.541,1.648,1.648,0,0,1,3.222,0,2.376,2.376,0,0,1,0,1.541Zm-24.273,2.417a.191.191,0,0,1-.191.19h-1.108a.191.191,0,0,1-.191-.19v-9.075a.191.191,0,0,1,.191-.191h1.108a.191.191,0,0,1,.191.191Zm-2.6,0a.191.191,0,0,1-.191.19h-1.108a.191.191,0,0,1-.191-.19v-9.075a.191.191,0,0,1,.191-.191h1.108a.191.191,0,0,1,.191.191Zm21.716-6.15v.774a.2.2,0,0,1-.262.219c-1.251-.257-2.021.3-2.021,1.451l0,3.705a.191.191,0,0,1-.191.19h-1.108a.191.191,0,0,1-.191-.19v-3.8a2.552,2.552,0,0,1,.816-1.923,2.88,2.88,0,0,1,2.025-.815,4.336,4.336,0,0,1,.769.073h0C1583.514,1126.226,1583.533,1126.3,1583.533,1126.5Zm-4.74,2.963a3.434,3.434,0,0,0-.634-2.05,3.377,3.377,0,0,0-5.332,0,3.6,3.6,0,0,0,0,4.1,3.283,3.283,0,0,0,2.666,1.3,3.416,3.416,0,0,0,1.9-.569v.811c0,1.1-.966,1.3-1.584,1.339a7.253,7.253,0,0,1-1.271-.07c-.17-.025-.288,0-.288.181,0,0,0,.974,0,.976,0,.072.055.15.174.16a5.45,5.45,0,0,0,3.128-.315,2.359,2.359,0,0,0,1.06-1.342,4.485,4.485,0,0,0,.182-1.341Zm-3.3,2.071a1.743,1.743,0,0,1-1.611-1.3,2.376,2.376,0,0,1,0-1.541,1.743,1.743,0,0,1,1.611-1.3c1.779,0,1.839,1.811,1.84,2.072S1577.272,1131.535,1575.493,1131.535Zm-16.178-2.735a2.836,2.836,0,0,0-.618-2,2.8,2.8,0,0,0-2.007-.688,4.3,4.3,0,0,0-2.206.6.14.14,0,0,0-.07.122.031.031,0,0,0,0,.008s.059.963.059.966c.01.131.115.173.233.1a3.07,3.07,0,0,1,2.661-.416,1.116,1.116,0,0,1,.522,1.068h-1.514c-.692,0-2.815.246-2.815,2.2,0,.006,0,.013,0,.02s0,.007,0,.012a1.88,1.88,0,0,0,.688,1.561,2.725,2.725,0,0,0,1.719.49h3.159a.191.191,0,0,0,.191-.19Zm-1.425,2.847h-1.827a1.19,1.19,0,0,1-.684-.238.754.754,0,0,1-.323-.631c0-.345.234-1.041,1.407-1.041h1.427Zm10.607-5.535a3.043,3.043,0,0,0-3.109,2.432,3.74,3.74,0,0,0-.113.92,3.486,3.486,0,0,0,.634,2.05,3.387,3.387,0,0,0,2.666,1.3,4.157,4.157,0,0,0,2.306-.45c.1-.06.126-.132.126-.324v-.857c0-.176-.1-.255-.269-.151a3.372,3.372,0,0,1-2.144.519,1.754,1.754,0,0,1-1.686-1.564h4.371a.179.179,0,0,0,.179-.178C1571.531,1128.62,1571.188,1126.112,1568.5,1126.112Zm-1.576,2.7a1.488,1.488,0,0,1,1.576-1.416,1.322,1.322,0,0,1,1.4,1.416Z" transform="translate(-1553.56 -1123.385)" fill="#626d79" />
                </svg>

              </a>
              <a
                class="social-icon brdr-circle no-underline"
                href="/"
                :aria-label="$t('Go to Blog')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25.802" height="13.353" viewBox="0 0 25.802 13.353">
                  <g id="Group_5" data-name="Group 5" transform="translate(-1623.354 -1123.64)">
                    <path id="Op_component_2" data-name="Op component 2" d="M1623.854,1124.742a13.909,13.909,0,0,1,2.414-.188,4.317,4.317,0,0,1,2.6.578,1.91,1.91,0,0,1,.944,1.694,2.109,2.109,0,0,1-1.51,1.963v.027a2.286,2.286,0,0,1,1.834,2.245,2.348,2.348,0,0,1-.876,1.869,5.063,5.063,0,0,1-3.372.847,16.165,16.165,0,0,1-2.036-.121Zm1.646,3.576h.849c1.146,0,1.794-.538,1.794-1.3,0-.847-.647-1.237-1.7-1.237a4.5,4.5,0,0,0-.944.068Zm0,4.168a5.255,5.255,0,0,0,.876.041c1.066,0,2.009-.4,2.009-1.52,0-1.049-.917-1.479-2.063-1.479h-.822Z" fill="#626d79" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1" />
                    <rect id="Op_component_3" data-name="Op component 3" width="1.67" height="9.55" transform="translate(1631.55 1124.14)" fill="#626d79" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1" />
                    <path id="Op_component_4" data-name="Op component 4" d="M1641.262,1130.348a3.249,3.249,0,0,1-3.372,3.482,3.171,3.171,0,0,1-3.291-3.375,3.238,3.238,0,0,1,3.4-3.469A3.146,3.146,0,0,1,1641.262,1130.348Zm-4.949.067c0,1.264.62,2.219,1.632,2.219.944,0,1.6-.928,1.6-2.245,0-1.022-.458-2.192-1.591-2.192C1636.785,1128.2,1636.313,1129.326,1636.313,1130.415Z" fill="#626d79" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1" />
                    <path id="Op_component_5" data-name="Op component 5" d="M1648.571,1132.728a3.159,3.159,0,0,1-3.506,3.765,4.664,4.664,0,0,1-2.292-.524l.364-1.25a3.976,3.976,0,0,0,1.915.5,1.743,1.743,0,0,0,1.888-1.977v-.564h-.027a2.221,2.221,0,0,1-1.915.968,2.908,2.908,0,0,1-2.792-3.2c0-2.152,1.4-3.456,2.981-3.456a2.069,2.069,0,0,1,1.9,1.022h.027l.068-.874h1.442c-.027.444-.054.981-.054,1.882Zm-1.659-2.971a1.619,1.619,0,0,0-.054-.444,1.377,1.377,0,0,0-1.349-1.062c-.931,0-1.619.807-1.619,2.138,0,1.116.567,2.016,1.6,2.016a1.416,1.416,0,0,0,1.349-.995,2.837,2.837,0,0,0,.068-.592Z" fill="#626d79" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1" />
                  </g>
                </svg>
              </a>
            </div>
            <div class="programs_we_participate">
              <a href="" class="no-underline"><img src="/assets/atat/rzetelnafirma.png"></a>
              <a href="" class="no-underline"><img src="/assets/atat/opineo.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row bottom-links">
        <div class="col-md-5">
          <p class="copy">
            Copyright 2019 © atat.pl
          </p>
          <language-switcher v-if="multistoreEnabled" />
        </div>
      </div>
    </div>
    <back-to-top bottom="20px" right="20px" visibleoffset="200">
      <button type="button" class="btn-top button no-outline brdr-none cl-white bg-cl-mine-shaft :bg-cl-th-secondary py10 px10">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" fill="white" />
        </svg>
      </button>
    </back-to-top>
  </footer>
</template>

<script>
import CurrentPage from 'theme/mixins/currentPage'
import LanguageSwitcher from '../../LanguageSwitcher.vue'
// import Newsletter from 'theme/components/core/blocks/Footer/Newsletter'
import BackToTop from 'theme/components/core/BackToTop'
import config from 'config'

export default {
  mixins: [CurrentPage],
  name: 'MainFooter',
  computed: {
    multistoreEnabled () {
      return config.storeViews.multistore
    },
    getVersionInfo () {
      return `v${process.env.__APPVERSION__} ${process.env.__BUILDTIME__}`
    }
  },
  components: {
    // Newsletter,
    LanguageSwitcher,
    BackToTop
  }
}
</script>

<style lang="scss" scoped>
.bottom-links {
  padding: 20px 0px;
  .col-md-5{
    text-align: left;
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  .copy{
    position: relative;
    color: #626D79;
    font-size: 14px;
    padding-left: 50px;
    display: inline-block;
    &:before{
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      margin: auto;
      content: "";
      display: block;
      width: 43px;
      height: 34px;
      background: url("/assets/atat/logo_footer.png");
    }
  }
  .links{
    text-align: right;
    ul{
      padding-right: 40px;
      a{
        font-size: 14px;
        color: #626D79;
        margin-right: 20px;
        &:after{
          display: none;
        }
        &:last-child{
          padding-right: 0px;
        }
        @media (max-width: 767px) {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 767px) {

      }
    }
    @media (max-width: 767px) {
      text-align: center;
    }
  }
}
.footer-links{
  background: #F7F9FC;
  border-bottom: #CBD3DD solid 1px;
  border-top: #CBD3DD solid 1px;
  padding: 60px 0px;
  &__title{
    font-family: "Roboto";
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    line-height: 22px;
    text-align: left;
  }
  &__box{
    max-width: 300px;
    width: 50%;
    padding-right: 40px;
    box-sizing: border-box;
    &:last-child{
      padding-right: 0px;
    }
  }
  &__list{
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  &__elem{
    position: relative;
    padding-left: 10px;
    padding-bottom: 5px;
    text-align: left;
    &:before{
      content: "•";
      position: absolute;
      top: 2px;
      left: 0px;
      font-size: 16px;
      color: #626D79;
    }
    a{
      font-size: 14px;
      color: #626D79;
      &:after{
        display: none;
      }
    }
  }
  @media (max-width: 595px) {
    padding: 30px 0px;
  }
}
.social{
  margin-top: 30px;
  padding: 0px 10px;
  @media (max-width: 595px) {
    margin-top: 0px;
  }
  @media (max-width: 767px) {

  }
  .social-icon{
    display: inline-block;
    width: 55px;
    height: 55px;
    position: relative;
    margin: 0px 2px;
    svg{
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      margin: auto;
      display: inline-block;
    }
  }

  .brdr-circle{
    border: #626D79 solid 2px;
  }
}
.programs_we_participate{
  margin-top: 20px;
  text-align: left;
  @media (max-width: 595px) {
    text-align: center;
  }
  a{
    display: inline-block;
    vertical-align: middle;
    margin-right: 30px;
    &:last-child{
      margin-right: 0px;
    }
    img{
      display: block;
    }
  }
}

@media (max-width: 595px) {
  .no-mobile {
    display: none;
  }
}
</style>
