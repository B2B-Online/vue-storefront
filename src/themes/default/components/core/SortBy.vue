<template>
  <div class="sort-by">
    <select
      name="sortby"
      class="cl-secondary"
      v-model="sortby"
      @change="changeOrder"
    >
      <option selected="selected" disabled value="" v-if="!hasLabel">
        {{ $t('Sort By') }}
      </option>
      <option v-for="(option, label) in sortByAttribute" :disabled="sortby === option" :value="option" :key="option">
        {{ $t(label) }}
      </option>
    </select>
  </div>
</template>

<script>
import SortBy from '@vue-storefront/core/compatibility/components/SortBy'
export default {
  mixins: [SortBy],
  props: {
    hasLabel: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      sortby: this.$store.state.config.products.defaultSortBy.attribute
    }
  }
}
</script>
<style lang="scss" scoped>
    @import '~theme/css/base/text';
    @import '~theme/css/variables/colors';
    @import '~theme/css/helpers/functions/color';
    $color-tertiary: color(tertiary);
    $color-solitude: color(solitude);
    $color-gainsboro: color(gainsboro);
    $color-black: color(black);
    $color-gray: color(gray);
    .sort-by {
        display: inline-flex;
        position: relative;
        background: $color-solitude;

        &:after {
          content: '';
          position: absolute;
          right: 20px;
          top: 16px;
          width: 7px;
          height: 7px;
          border: 2px solid $color-gray;
          border-top: none;
          border-right: none;
          transform: rotate(-45deg);
        }
        select {
            @extend .h4;
            font-size: 14px;
            border: 1px solid $color-gainsboro;
            width: 100%;
            border-radius: 3px;
            background-color: transparent;
            margin-right: 0;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            padding: 0 40px 0 20px;
            color: $color-black;
            z-index: 1;
            &:focus {
                outline: none;
            }
        }
        &__icon {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }
    @media (max-width: 770px) {
      .sort-by {
        width: 100%;
      }
    }
</style>
