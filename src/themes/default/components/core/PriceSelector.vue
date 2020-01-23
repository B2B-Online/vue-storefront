<template>
  <div @click="switchFilter(id, from, to)">
    <button
      class="relative brdr-cl-bg-tertiary brdr-1 bg-cl-transparent mr10 pointer price-selector"
      :class="{ active: active }"
      :aria-label="$t('Price ') + content"
    >
      <span class="bg-cl-transparent absolute block square" />
    </button>
    <span class="price-selector-label">{{ content }}</span>
  </div>
</template>

<script>
import PriceSelector from '@vue-storefront/core/compatibility/components/PriceSelector'

export default {
  mixins: [PriceSelector]
}
</script>

<style lang="scss" scoped>
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';
  $color-event: color(tertiary);
  $color-active: color(accent);
  $color-mid-grey: color(mid-grey);
  $color-white-smoke: color(white-smoke);

  .price-selector {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    $color-gainsboro: color(gainsboro);
    border: 1px solid $color-gainsboro;
    background: $color-white-smoke;
    vertical-align: bottom;


    &:hover {
      .square {
        background-color: $color-event;
      }
    }

    &.active {
      .square {
        background-color: $color-active;
      }
    }
  }

  .price-selector-label {
    color: $color-mid-grey;
    vertical-align: bottom;
  }

  .square {
    width: 55%;
    height: 55%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
