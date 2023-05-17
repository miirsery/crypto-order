<template>
  <div class="main-layout">
    <div class="main-layout__content">
      <base-header />

      <div class="divider" />

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

.divider {
  width: 100%;
  height: 1px;
  background: transparent radial-gradient(rgba($color--white, 1), rgba($color--white, 0));
  margin-bottom: 112px;
  opacity: 0.1;
}
</style>
