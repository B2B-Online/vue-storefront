<template>
  <div class="product-status-wrapper">
    <div class="status" :class="cssClasses">
      <template v-if="isInStock">
        <i class="material-icons">check</i>
        <span>{{ $t('available') }}</span>
      </template>
      <template v-else>
        <i class="material-icons">close</i>
        <span>{{ $t('unavailable') }}</span>
      </template>
    </div>
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

  computed: {
    cssClasses () {
      return {
        'status--available': this.isInStock,
        'status--unavailable': !this.isInStock
      };
    },

    isInStock () {
      const { stock } = this.product;
      return stock[0].is_in_stock && stock[0].qty > 0;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';
  $color-strong-cyan: color(strong-cyan);
  $color-gainsboro: color(gainsboro);

  .product-status-wrapper {
    margin-top: 20px;
    text-align: center;
  }

  .status {
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid;
    border-radius: 3px;
    font-size: 14px;

    &--available {
      border-color: $color-strong-cyan;
      color: $color-strong-cyan;
    }

    &--unavailable {
      border-color: $color-gainsboro;
      color: $color-gainsboro;
    }

    .material-icons {
      font-size: 1em;
      position: relative;
      top: 2px;
    }
  }
</style>
