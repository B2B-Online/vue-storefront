<template>
  <div class="newsletter" v-if="!isSubscribed">
    <div class="newsletter__content">
      <h3 class="newsletter__title">
        {{ $t("Newsletter") }}
      </h3>
      <p class="newsletter__text">
        Zapisz się teraz do newslettera i zyskaj:
      </p>
      <ul class="newsletter__list">
        <li>Dostęp do aktualnych promocji</li>
        <li>Specjalne kody rabatowe</li>
        <li>Informacje o najnowszych trendach</li>
      </ul>
      <div class="newsletter__button flex center-xs">
        <button
          @click="showNewsletterPopup"
          class="btn btn--orange btn--big"
          data-testid="openNewsletterButton"
        >
          {{ $t("Subscribe") }}
        </button>
      </div>
    </div>
    <newsletter-popup v-if="loadNewsletterPopup" />
  </div>
</template>

<script>
import SubscriptionStatus from '@vue-storefront/core/modules/newsletter/mixins/SubscriptionStatus';
// import ButtonOutline from 'theme/components/theme/ButtonOutline';
import { mapState } from 'vuex';
const NewsletterPopup = () =>
  import(
    /* webpackChunkName: "vsf-newsletter-modal" */ 'theme/components/core/NewsletterPopup.vue'
  );

export default {
  name: 'Newsletter',
  mixins: [SubscriptionStatus],
  data () {
    return {
      loadNewsletterPopup: false
    };
  },
  computed: {
    ...mapState({
      isOpen: state => state.ui.newsletterPopup
    })
  },
  methods: {
    showNewsletterPopup () {
      this.loadNewsletterPopup = true;
      this.$bus.$emit('modal-show', 'modal-newsletter');
    }
  },
  components: {
    NewsletterPopup
  }
};
</script>

<style lang="scss" scoped>
.newsletter {
  margin-bottom: 30px;
  * {
    box-sizing: border-box;
  }
  &__content {
    border: 1px solid #cbd3dd;
    border-radius: 5px;
    padding: 20px;
  }
  &__title {
    padding: 0px;
    margin: 0px;
    font-size: 22px;
    color: #000;
    font-weight: 400;
  }

  &__text {
    color: #626d79;
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  &__list {
    padding: 0px;
    margin: 0px;
    list-style: none;
    margin-bottom: 20px;
    li {
      padding-left: 10px;
      position: relative;
      color: #626d79;
      line-height: 19px;
      font-weight: 300;
      &::before {
        position: absolute;
        top: -1px;
        left: 0px;
        content: "-";
        color: #626d79;
      }
    }
  }
  &__button {
    margin-top: 30px;
    margin-bottom: 10px;
  }
}
</style>
