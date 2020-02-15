<template>
  <div
    class="microcart"
    :class="[productsInCart.length ? 'bg-cl-secondary' : 'bg-cl-primary']"
    data-testid="microcart"
  >
    <div class="row microcart__head py15">
      <div class="col-xs-8 center-self">
        <h2 v-if="productsInCart.length" class="cl-black microcart__title px30">
          {{ $t("Shopping cart") }}
        </h2>
      </div>
      <div class="col-xs end-xs center-self">
        <i
          class="material-icons p10 mr20 pointer microc art__close"
          @click="closeMicrocartExtend"
        >close</i>
      </div>
    </div>
    <div class="row middle-xs py30 bg-cl-primary">
      <clear-cart-button
        v-if="productsInCart.length"
        @click.native="clearCart"
        class="col-xs-12 col-sm end-xs mr20"
      />
    </div>

    <h4 v-if="!productsInCart.length" class="cl-accent ml30">
      {{ $t("Your shopping cart is empty.") }}
    </h4>
    <div
      v-if="!productsInCart.length"
      class="ml30"
      @click="closeMicrocartExtend"
    >
      {{ $t("Don't hesitate and") }}
      <router-link :to="localizedRoute('/')">
        {{ $t("browse our catalog") }}
      </router-link>
      {{ $t("to find something beautiful for You!") }}
    </div>
    <ul
      v-if="productsInCart.length"
      class="bg-cl-primary m0 px40 pb40 products"
    >
      <product
        v-for="product in productsInCart"
        :key="product.sku"
        :product="product"
      />
    </ul>
    <div v-if="productsInCart.length" class="summary px40">
      <h3 class="m0 pt40 mb30 summary__heading cl-black">
        {{ $t("Shopping summary") }}
      </h3>
      <div
        v-for="(segment, index) in totals"
        :key="index"
        class="row py15"
        v-if="segment.code !== 'grand_total'"
      >
        <div class="col-xs  cl-mid-grey">
          {{ segment.title }}
          <button
            v-if="appliedCoupon && segment.code === 'discount'"
            type="button"
            class="p0 brdr-none bg-cl-transparent close delete-button ml10"
            @click="clearCoupon"
          >
            <i class="material-icons cl-accent">
              close
            </i>
          </button>
        </div>
        <div
          v-if="segment.value != null"
          class="col-xs align-right cl-mid-grey"
        >
          {{ segment.value | price }}
        </div>
      </div>
      <div class="row py20">
        <!-- <div v-if="OnlineOnly && !addCouponPressed" class="col-xs-12">
          <button
            class="p0 brdr-none serif fs-medium-small cl-accent bg-cl-transparent"
            type="button"
            @click="addDiscountCoupon"
          >
            {{ $t("Add a discount code") }}
          </button>
        </div> -->
        <div v-if="OnlineOnly" class="col-xs-12 col-sm-6 pt10 coupon-wrapper">
          <div class="coupon-input">
            <label class="h6 cl-secondary">{{ $t("Discount code") }}</label>
            <base-input
              type="text"
              id="couponinput"
              :autofocus="true"
              v-model.trim="couponCode"
              @keyup.enter="setCoupon"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 pt10 coupon-wrapper">
          <button-full
            :disabled="!couponCode"
            @click.native="setCoupon"
            :class="[
              'btn',
              'btn--dark-blue',
              'btn--medium',
              'btn--block',
              'btn--add-coupon'
            ]"
          >
            {{ $t("Add discount code") }}
          </button-full>
        </div>
      </div>

      <div
        class="row pt30 pb20 weight-700 middle-xs total-price"
        v-for="(segment, index) in totals"
        :key="index"
        v-if="segment.code === 'grand_total'"
      >
        <div class="col-xs total-price__label cl-black">
          {{ segment.title }}
        </div>
        <div class="col-xs align-right total-price__value cl-black">
          {{ segment.value | price }}
        </div>
      </div>
    </div>

    <div
      class="row py20 px40 middle-xs microcart__btn-row"
      v-if="productsInCart.length && !isCheckoutMode"
    >
      <div class="col-xs-12 col-sm-6 first-sm">
        <button-full
          @click.native="closeMicrocartExtend"
          :class="['btn', 'btn--dark-blue', 'btn--medium', 'btn--block']"
        >
          {{ $t("Return to shopping") }}
        </button-full>
      </div>
      <div class="col-xs-12 first-xs col-sm-6 end-sm">
        <button-full
          :link="{ name: 'checkout' }"
          @click.native="closeMicrocartExtend"
          :class="['btn', 'btn--orange', 'btn--medium', 'btn--block']"
        >
          {{ $t("Go to checkout") }}
        </button-full>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@vue-storefront/i18n';
import { isModuleRegistered } from '@vue-storefront/core/lib/module';

import Microcart from '@vue-storefront/core/compatibility/components/blocks/Microcart/Microcart';
import VueOfflineMixin from 'vue-offline/mixin';
import onEscapePress from '@vue-storefront/core/mixins/onEscapePress';

import BaseInput from 'theme/components/core/blocks/Form/BaseInput';
import ClearCartButton from 'theme/components/core/blocks/Microcart/ClearCartButton';
import ButtonFull from 'theme/components/theme/ButtonFull';
import Product from 'theme/components/core/blocks/Microcart/Product';

export default {
  components: {
    Product,
    ClearCartButton,
    ButtonFull,
    BaseInput
  },
  mixins: [Microcart, VueOfflineMixin, onEscapePress],
  data () {
    return {
      addCouponPressed: false,
      couponCode: '',
      componentLoaded: false,
      isInstantCheckoutRegistered: isModuleRegistered('instant-checkout')
    };
  },
  props: {
    isCheckoutMode: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.componentLoaded = true;
    });
  },
  methods: {
    addDiscountCoupon () {
      this.addCouponPressed = true;
    },
    clearCoupon () {
      this.removeCoupon();
      this.addCouponPressed = false;
    },
    async setCoupon () {
      const couponApplied = await this.applyCoupon(this.couponCode);
      this.addCouponPressed = false;
      this.couponCode = '';
      if (!couponApplied) {
        this.$store.dispatch('notification/spawnNotification', {
          type: 'warning',
          message: i18n.t(
            "You've entered an incorrect coupon code. Please try again."
          ),
          action1: { label: i18n.t('OK') }
        });
      }
    },
    closeMicrocartExtend () {
      this.closeMicrocart();
      this.$store.commit('ui/setSidebar', false);
      this.addCouponPressed = false;
    },
    onEscapePress () {
      this.closeMicrocart();
    },
    clearCart () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: i18n.t(
          'Are you sure you would like to remove all the items from the shopping cart?'
        ),
        action1: { label: i18n.t('Cancel'), action: 'close' },
        action2: {
          label: i18n.t('OK'),
          action: async () => {
            await this.$store.dispatch('cart/clear', {
              recreateAndSyncCart: false
            }); // just clear the items without sync
            await this.$store.dispatch('cart/sync', { forceClientState: true });
          }
        },
        hasNoTimeout: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~theme/css/animations/transitions";
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";

.microcart {
  padding-bottom: 50px;

  &__title {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
  }
  &__head {
    background: color(white-smoke);
    min-height: 118px;
  }
  &__close {
    color: color(gray-sec);
  }
  &__btn-row {
    @media (max-width: 576px) {
      div:nth-child(2) {
        margin-bottom: 30px;
      }
    }
  }
  .total-price {
    &__label {
      font-size: 24px;
      font-weight: 700;
    }
    &__value {
      font-size: 24px;
      font-weight: 700;
    }
  }
  .summary {
    &__heading {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
</style>
