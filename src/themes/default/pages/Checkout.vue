<template>
  <div id="checkout">
    <header class="checkout-header bg-cl-secondary py30">
      <div class="container">
        <breadcrumbs
          :routes="[{ name: 'Home', route_link: '/' }]"
          :active-route="$t('Checkout')"
        />
        <div class="row">
          <div class="col-xs">
            <h1 class="checkout-title mb5">
              {{ $t('Checkout') }}
            </h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container mt50">
      <div class="row" v-show="!isThankYouPage">
        <div class="col-xs-12 col-lg-6 pb70">
          <personal-details
            class="line relative"
            :is-active="activeSection.personalDetails"
            :focused-field="focusedField"
          />
          <shipping class="line relative" :is-active="activeSection.shipping" v-if="!isVirtualCart" />
          <payment class="line relative" :is-active="activeSection.payment" />
          <order-review class="line relative" :is-active="activeSection.orderReview" />
          <!-- <shipping class="line relative" :is-active="true" v-if="true" />
          <payment class="line relative" :is-active="true" />
          <order-review class="line relative" :is-active="true" /> -->
          <div id="custom-steps" />
        </div>
        <div class="col-xs col-lg-6 hidden-sm">
          <cart-summary />
        </div>
      </div>
    </div>
    <thank-you-page v-show="isThankYouPage" />
  </div>
</template>

<script>
import Checkout from '@vue-storefront/core/pages/Checkout'
import PersonalDetails from 'theme/components/core/blocks/Checkout/PersonalDetails'
import Shipping from 'theme/components/core/blocks/Checkout/Shipping'
import Payment from 'theme/components/core/blocks/Checkout/Payment'
import OrderReview from 'theme/components/core/blocks/Checkout/OrderReview'
import CartSummary from 'theme/components/core/blocks/Checkout/CartSummary'
import ThankYouPage from 'theme/components/core/blocks/Checkout/ThankYouPage'
import Breadcrumbs from '../components/core/Breadcrumbs.vue'

export default {
  components: {
    PersonalDetails,
    Shipping,
    Payment,
    OrderReview,
    CartSummary,
    ThankYouPage,
    Breadcrumbs
  },
  mixins: [Checkout],

  methods: {
    notifyEmptyCart () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t(
          'Shopping cart is empty. Please add some products before entering Checkout'
        ),
        action1: { label: this.$t('OK') }
      })
    },
    notifyOutStock (chp) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: chp.name + this.$t(' is out of the stock!'),
        action1: { label: this.$t('OK') }
      })
    },
    notifyNotAvailable () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t('Some of the ordered products are not available!'),
        action1: { label: this.$t('OK') }
      })
    },
    notifyStockCheck () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t(
          'Stock check in progress, please wait while available stock quantities are checked'
        ),
        action1: { label: this.$t('OK') }
      })
    },
    notifyNoConnection () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t(
          'There is no Internet connection. You can still place your order. We will notify you if any of ordered products is not available because we cannot check it right now.'
        ),
        action1: { label: this.$t('OK') }
      })
    }
  }
}
</script>

<style lang="scss">
@import '~theme/css/base/text';
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$bg-secondary: color(secondary, $colors-background);
$color-tertiary: color(tertiary);
$color-secondary: color(secondary);
$color-error: color(error);
$color-white: color(white);
$color-black: color(black);
$color-gainsboro: color(gainsboro);
$color-solitude: color(solitude);
$color-ford-cordovan: color(ford-cordovan);

#checkout {
  .number-circle {
    width: 35px;
    height: 35px;

    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
      line-height: 25px;
    }
  }
  .radioStyled {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    line-height: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: 2px;
      left: 0;
      height: 22px;
      width: 22px;
      border-radius: 50%;
      border: 1px solid $color-gainsboro;
      background: $color-solitude;

      &:after {
        content: '';
        position: absolute;
        display: none;
        top: 6px;
        left: 6px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: $color-ford-cordovan;
      }
    }

    input:checked ~ .checkmark:after {
      display: block;
    }
  }
}

.line {
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 17px;
    z-index: -1;
    width: 1px;
    height: 100%;
    background-color: $bg-secondary;

    @media (max-width: 768px) {
      display: none;
    }
  }
}

.checkout-header {
  border-top: 1px solid $color-gainsboro;
}

.checkout-title {
  font-size: 28px;
}
</style>
