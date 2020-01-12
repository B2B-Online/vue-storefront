<template>
  <div class="badge" v-if="showBadge()" :class="getClass()">
    <span>{{ $t(getTextLabel()) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    showBadge () {
      if (this.product.is_promotion) {
        return true;
      } else if (this.product.is_new_product) {
        return true;
      } else if (this.product.is_suggested) {
        return true;
      }
      return false;
    },
    getClass () {
      if (this.product.is_promotion) {
        return 'badge--promotion';
      } else if (this.product.is_new_product) {
        return 'badge--novelty';
      } else if (this.product.is_suggested) {
        return 'badge--top';
      }
    },
    getTextLabel () {
      if (this.product.is_promotion) {
        return 'Promotion';
      } else if (this.product.is_new_product) {
        return 'Novelty';
      } else if (this.product.is_suggested) {
        return 'Top';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.badge {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 11px;
  color: #ffffff;
  width: 65px;
  text-align: center;
  text-transform: uppercase;
  height: 65px;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  opacity: 1;
  z-index: 1000;
  border-radius: 100%;
  &--promotion {
    background: #e71756;
  }
  &--top {
    background: #13a1b2;
  }
  &--novelty {
    background: #10bf67;
  }
}
</style>
