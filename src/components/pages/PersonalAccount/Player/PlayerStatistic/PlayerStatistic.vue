<template>
  <div class="d-f ai-c jc-sb fd-xs-c mb-32 w-100 mb-xs-0 jc-xs-c">
    <div class="statistic">
      <div class="d-f ai-c fd-c fd-md-r ai-xs-fs">
        <div class="statistic__image-wrapper">
          <img src="@@/assets/images/account/statistic.png" />
        </div>
        <div class="w-100">
          <div class="personal-account__title">Payout statistics</div>

          <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
            <div class="personal-account__text">My number</div>
            <base-tag text="24" class="ml-24" />
          </div>
          <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
            <div class="personal-account__text">Paid in total</div>
            <base-tag text="$720" class="ml-24" />
          </div>
          <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
            <div class="personal-account__text">Automatically reinvested</div>
            <base-tag text="$600" class="ml-24" />
          </div>
          <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
            <div class="personal-account__text">Withdrawn to wallet</div>
            <base-tag class="ml-24" mode="primary" text="$120" />
          </div>
        </div>
      </div>
    </div>
    <div class="statistic">
      <div class="personal-account__title"> Current queue information </div>

      <div class="d-f ai-c w-xs-100 jc-sb mb-32 mb-xs-14">
        <div class="personal-account__text">Last player number</div>
        <base-tag text="#430" class="ml-24" />
      </div>
      <div class="d-f ai-c w-xs-100 jc-sb">
        <div class="personal-account__text">Place of the last player</div>
        <base-tag class="ml-24" mode="primary" text="#1 708" />
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

.statistic {
  height: 351px;
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 15px;
  background: linear-gradient(266.02deg, #1f2443 -14.01%, $color--background-2 77.54%);
  padding: 32px 48px;
  backdrop-filter: blur(4.5px);

  &__image {
    &-wrapper {
      width: 100%;
      height: 100%;
      max-width: 230px;
      max-height: 287px;
      margin-right: 48px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @include responsive(md, $breakpoints-only-max) {
        height: 237px;
        max-width: 180px;
        margin-right: 24px;
        margin-bottom: 24px;
      }
    }
  }

  &:first-child {
    height: auto;
    margin-right: 32px;

    @include responsive(md, $breakpoints-only-max) {
      margin-right: 16px;
    }

    @include responsive(xs) {
      margin-right: 0;
      margin-bottom: 14px;
    }
  }

  &:last-child {
    padding: 48px;

    @include responsive(md, $breakpoints-only-max) {
      height: auto;
      padding: 32px 24px;
    }
  }

  @include responsive(md, $breakpoints-only-max) {
    width: 100%;
    padding: 32px 24px;
  }

  @include responsive(xs) {
    margin-bottom: 14px;
  }
}
</style>
