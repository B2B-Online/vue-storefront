<template>
  <div class="breadcrumbs h5 cl-gray">
    <span v-for="link in routes" :key="link.route_link" class="breadcrumb">
      <router-link :to="localizedRoute(link.route_link)">{{
        link.name | htmlDecode
      }}</router-link>
      <span class="breadcrumbs__marker">&rarr;</span>
    </span>
    <span class="cl-black breadcrumb breadcrumb--active">{{
      activeRoute | htmlDecode
    }}</span>
  </div>
</template>

<script>
import Breadcrumbs from '@vue-storefront/core/compatibility/components/Breadcrumbs'

export default {
  mixins: [Breadcrumbs]
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-mid-grey: color(mid-grey);
$color-gainsboro: color(gainsboro);
$color-black: color(black);
.breadcrumbs {
  &__marker {
    padding: 0 4px;
  }
}

.breadcrumb {
  color: $color-mid-grey;

  &--active {
    font-weight: 600;
    color: $color-black;
  }
}
</style>
