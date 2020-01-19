<template>
  <div class="breadcrumbs h5 cl-gray">
    <span v-for="link in routes" :key="link.route_link">
      <router-link :to="localizedRoute(link.route_link)">{{ link.name | htmlDecode }}</router-link>
      <span class="breadcrumbs__marker">&rarr;</span>
    </span>
    <span class="cl-mine-shaft">{{ activeRoute | htmlDecode }}</span>
  </div>
</template>

<script>
import Breadcrumbs from '@vue-storefront/core/compatibility/components/Breadcrumbs';

export default {
  mixins: [Breadcrumbs]
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &__marker {
    padding: 0 4px;
  }
}
</style>
