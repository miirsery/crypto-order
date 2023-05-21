<template>
  <div class="player-position">
    <div class="personal-account__title">Player Position</div>

    <div class="d-f ai-c jc-sb fd-xs-c">
      <div class="d-f ai-c w-xs-100 jc-xs-sb mb-xs-14">
        <div class="personal-account__text">My number</div>
        <base-tag text="#24" class="ml-24" />
      </div>
      <div class="d-f ai-c w-xs-100 jc-xs-sb mb-xs-14">
        <div class="personal-account__text">My start place</div>
        <base-tag text="#244" class="ml-24" />
      </div>
      <div class="d-f ai-c w-xs-100 jc-xs-sb">
        <div class="personal-account__text">My current place</div>
        <base-tag class="ml-24" mode="primary" text="#1 437" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.personal-account {
  &__title {
    @include font(26px, 31px, 700);

    letter-spacing: 0.01em;
    margin-bottom: 32px;

    @include responsive(xs) {
      margin-bottom: 24px;
    }
  }

  &__text {
    @include font(16px, 19px, 500);

    letter-spacing: 0.01em;
    white-space: nowrap;
    color: $color--gray-10;

    @include responsive(xs) {
      @include font(12px, 15px);
    }
  }
}

.player-position {
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 15px;
  background-color: $color--background;
  padding: 48px;
  margin-bottom: 32px;
  backdrop-filter: blur(4.5px);

  .base-tag {
    padding: 5px 14px;
  }

  @include responsive(xs) {
    padding: 32px 24px;
    margin-bottom: 14px;
  }
}
</style>
