<template>
  <div>
    <div class="bg-cl-secondary py35 pl20">
      <div class="container">
        <h2 class="fs-big">
          {{ $t('Atat start page') }}
        </h2>
      </div>
    </div>

    <div class="container pt45 pb70">
      <h3>{{ $t('Choose store industry') }}</h3>
      <div class="row pl20 pt0">
        <div class="col-sm-3">
          <nav class="static-menu serif h4 mb35">
            <ul class="m0 p0">
              <li class="mb10">
                <router-link :to="localizedRoute('/elektryka')" class="cl-accent relative">
                  {{ $t('Electricity') }}
                </router-link>
              </li>
              <li class="mb10">
                <router-link :to="localizedRoute('/elektryka/oprawy-oswietleniowe-konsumenckie')" class="cl-accent relative">
                  {{ $t('Lighting') }}
                </router-link>
              </li>
              <li class="mb10">
                <router-link :to="localizedRoute('/chemia')" class="cl-accent relative">
                  {{ $t('Chemistry') }}
                </router-link>
              </li>
              <li class="mb10">
                <router-link :to="localizedRoute('/spozywcze')" class="cl-accent relative">
                  {{ $t('Food') }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$border-primary: color(primary, $colors-border);

.static-menu {
  ul {
    list-style: none;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $border-primary;
  }

  a:hover::after,
  .router-link-active::after {
    opacity: 0;
  }
}

.static-content {
  *:first-of-type {
    margin-top: 0;
  }
}
</style>
