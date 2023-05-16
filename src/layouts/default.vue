<template>
  <div class="main-layout">
    <div class="main-layout__content">
      <base-header />

      <nuxt-page />
    </div>

    <base-footer />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  position: relative;

  &__content {
    max-width: 1195px;
    padding: 0 15px;
    margin: 0 auto;
  }
}
</style>
