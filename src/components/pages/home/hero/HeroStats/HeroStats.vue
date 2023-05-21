<template>
  <div class="hero-stats parallelogram">
    <div class="hero-stats__stat">
      <h3>2 910</h3>
      <div>players in game</div>
    </div>

    <div class="divider" />

    <div class="hero-stats__stat">
      <h3>486</h3>
      <div>transactions</div>
    </div>

    <div class="divider" />

    <div class="hero-stats__stat">
      <h3>21 578</h3>
      <div>turnover</div>
    </div>

    <div class="divider" />

    <div class="hero-stats__stat">
      <h3>$9 118</h3>
      <div>referrer payments</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-stats {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;

  &.parallelogram {
    &::before {
      background: linear-gradient(
        96.51deg,
        rgb(68 70 92 / 0.31) 10.24%,
        rgb(78 80 118 / 0.31) 53.31%,
        rgb(91 94 153 / 0.31) 89.76%
      );
      backdrop-filter: blur(4.5px);
    }
  }

  @include responsive(md, $breakpoints-only-max) {
    padding: 20px 40px;
  }
}

.divider {
  width: 1px;
  height: 102px;
}
</style>
