<template>
  <button class="brdr-none bg-cl-transparent middle-xs inline-flex cl-secondary weight-400 sans-serif" @click="$emit('click')">
    <span class="clearcart-btn cl-black pr30">
      <i class="material-icons cl-accent mr5">
        cancel
      </i>
      {{ $t('Clear wishlist') }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
  .clearcart {
    &-btn {
      display: flex;
      align-items: center;
      font-size: 16px;
    }
  }
</style>
