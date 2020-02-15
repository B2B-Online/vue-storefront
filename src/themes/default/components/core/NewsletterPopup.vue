<template>
  <modal name="modal-newsletter" :width="750">
    <p slot="header">
      {{ $t("Newsletter") }}
    </p>
    <div slot="content">
      <form @submit.prevent="subscribe(onSuccesfulSubmission)" novalidate>
        <div class="mb10">
          <p class="h4 mb20 cl-mid-grey">
            {{
              $t("Sign up to our newsletter and receive a coupon for 10% off!")
            }}
          </p>
          <base-input
            focus
            type="email"
            name="email"
            v-model="email"
            autocomplete="email"
            :placeholder="$t('E-mail address *')"
            :validations="[
              {
                condition: $v.email.$error && !$v.email.required,
                text: $t('Field is required.')
              },
              {
                condition: !$v.email.email && $v.email.$error,
                text: $t('Please provide valid e-mail address.')
              }
            ]"
          />
          <base-checkbox
            v-model="aggrement1"
            class="mb20 modal-newsletter__checkbox"
            id="aggrement1"
          >
            Wyrażam zgodę na otrzymywanie od Przedsiębiorstwa Handlowego A-T
            S.A. drogą elektroniczną informacji stanowiących informacje handlowe
            dotyczące produktów i usług P rzedsiębiorstwa Handlowego A-T S.A.
          </base-checkbox>

          <base-checkbox
            v-model="aggrement2"
            id="aggrement2"
            class="mb20 modal-newsletter__checkbox"
          >
            Wyrażam zgodę na kontaktowanie się ze mną przez Przedsiębiorstwo
            Handlowe A-T S.A. przy użyciu telekomunikacyjnych urządzeń końcowych
            i automatycznych systemów wywołujących dla celów marketingu
            bezpośredniego.
          </base-checkbox>
        </div>
        <button-full
          class="btn btn--orange btn--big"
          type="submit"
          :disabled="this.$v.$invalid || !aggrement2 || !aggrement1"
          @click.native="$v.email.$touch"
        >
          {{ $t("Subscribe") }}
        </button-full>
      </form>
    </div>
  </modal>
</template>
<script>
import SubscriptionStatus from "@vue-storefront/core/modules/newsletter/mixins/SubscriptionStatus";
import Subscribe from "@vue-storefront/core/modules/newsletter/mixins/Subscribe";
import i18n from "@vue-storefront/i18n";

import ButtonFull from "theme/components/theme/ButtonFull.vue";
import Modal from "theme/components/core/Modal";
import BaseInput from "theme/components/core/blocks/Form/BaseInput.vue";
import BaseCheckbox from "theme/components/core/blocks/Form/BaseCheckbox";

export default {
  mounted() {
    this.$nextTick(() => {
      this.$bus.$emit("modal-show", "modal-newsletter");
    });
  },
  beforeDestroy() {
    this.$off("validation-error");
  },
  methods: {
    onSuccesfulSubmission() {
      this.$store.dispatch("notification/spawnNotification", {
        type: "success",
        message: i18n.t(
          "You have been successfully subscribed to our newsletter!"
        ),
        action1: { label: i18n.t("OK") }
      });
      this.$bus.$emit("modal-hide", "modal-newsletter");
    }
  },
  components: {
    ButtonFull,
    Modal,
    BaseInput,
    BaseCheckbox
  },
  mixins: [SubscriptionStatus, Subscribe],
  data() {
    return {
      aggrement1: false,
      aggrement2: false
    };
  }
};
</script>
<style lang="scss">
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";
.modal-newsletter {
  &__checkbox {
    label {
      color: color(mid-grey);
      font-size: 12px;
      line-height: 20px;
      display: block;
    }
  }
}
</style>
