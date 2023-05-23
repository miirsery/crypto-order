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

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('@@/assets/images/bg-line.png') repeat-y;
    opacity: 0.05;
    z-index: -1;
    inset: 0;
  }

  &__content {
    max-width: 1175px;
    margin: 0 auto;
  }
}
</style>
