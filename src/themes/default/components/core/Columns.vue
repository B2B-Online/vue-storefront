<template>
  <div class="columns">
    <select
      name="column"
      class="cl-secondary"
      v-model="column"
      @change="changeColumn"
    >
      <option v-for="(option) in productsColumns" :value="option" :key="option">
        {{ option }} {{ $t('Columns') }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      column: 3,
      productsColumns: [2, 3, 4]
    }
  },
  methods: {
    changeColumn () {
      this.$emit('change-column', this.column)
    }
  }
}
</script>
<style lang="scss" scoped>
    @import '~theme/css/base/text';
    @import '~theme/css/variables/colors';
    @import '~theme/css/helpers/functions/color';
    $color-tertiary: color(tertiary);
    $color-gainsboro: color(gainsboro);
    $color-solitude: color(solitude);
    $color-black: color(black);
    $color-gray: color(gray);
    .columns {
        display: inline-flex;
        position: relative;
        background: $color-solitude;
        margin-right: 10px;
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
      .columns {
        width: 100%;
      }
    }
</style>
