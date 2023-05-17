<template>
  <div class="connect-telegram">
    <div class="mb-24 d-f ai-c">
      <h2 class="connect-telegram__title">Connect to us <span class="color-primary">in Telegram</span></h2>
      <link-button to="#" outline />
    </div>
    <div class="connect-telegram__text">Stay informed. News, Promo, Level updates etc.</div>
  </div>
</template>

<style lang="scss" scoped>
.connect-telegram {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $color--background-2;
  padding: 80px 0;

  &__title {
    margin-right: 42px;

    @include responsive(xs) {
      @include font(28px, 33px, 700);
    }
  }

  &__text {
    @include font(16px, 22px, 300);

    letter-spacing: 0.01em;
    color: $color--gray-2;

    @include responsive(xs) {
      max-width: 196px;
    }
  }

  .el-button {
    :deep(span) {
      display: none;
    }

    @include responsive(xs) {
      width: 52px;
      height: 68px !important;
      border-radius: 15px !important;
    }
  }

  @include responsive(xs) {
    align-items: flex-start;
    padding: 32px;
  }

  @include responsive(xs-small) {
    padding: 16px;
  }
}
</style>
