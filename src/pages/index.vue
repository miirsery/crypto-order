<template>
  <div class="home-page">
    <div class="divider" />

    <section>
      <hero-info />

      <hero-stats />

      <client-only>
        <base-icon v-if="!isMobile" name="hero-blocks" />

        <div v-else class="home-page__blocks-mobile">
          <img src="@@/assets/images/blocks--mobile.png" />
        </div>
      </client-only>
    </section>

    <section class="home-page__timer-section">
      <div class="home-page__subtitle">Game will start in:</div>

      <div class="home-page__timer">
        <div class="home-page__timer-inner">
          <div class="home-page__timer-block parallelogram">
            <h3 class="home-page__timer-title">11</h3>
            <p class="home-page__timer-subtitle">Days</p>
          </div>
          <div class="home-page__timer-colon"> : </div>

          <div class="home-page__timer-block parallelogram">
            <h3 class="home-page__timer-title">09</h3>
            <p class="home-page__timer-subtitle">Hours</p>
          </div>
        </div>

        <div class="home-page__timer-colon home-page__timer-colon-middle"> : </div>

        <div class="home-page__timer-inner">
          <div class="home-page__timer-block parallelogram">
            <h3 class="home-page__timer-title">54</h3>
            <p class="home-page__timer-subtitle">Minutes</p>
          </div>
          <div class="home-page__timer-colon"> : </div>

          <div class="home-page__timer-block parallelogram">
            <h3 class="home-page__timer-title">21</h3>
            <p class="home-page__timer-subtitle">Seconds</p>
          </div>
        </div>

        <cover-text type="secondary" text="Take a profit in" angle="10" />

        <base-icon name="line-3" />
        <base-icon name="line-3--mobile" />
      </div>
    </section>

    <section class="mt-200 mt-xs-60">
      <div class="home-page__subtitle">How to start?</div>

      <div class="home-page__start-bg">
        <img src="@@/assets/images/bg-2.png" />
      </div>

      <div class="home-page__start-bg-1">
        <img src="@@/assets/images/bg-4.png" />
      </div>

      <div class="home-page__start">
        <cover-text text="let's start" angle="-10" />

        <client-only>
          <base-icon v-if="!isMobile" name="line-4" />
          <base-icon v-else width="46" height="25" name="line-4--mobile" />
        </client-only>

        <div class="home-page__start-block parallelogram">
          <h4>Connect wallet</h4>
          <p>connect your MetaMask wallet</p>
          <link-button to="#" underline>Login</link-button>

          <div class="circle" />
        </div>
        <div class="home-page__start-block parallelogram">
          <h4>JOIN THE GAME</h4>
          <p>to get profit</p>
          <link-button to="#" underline>Start now!</link-button>

          <div class="circle" />
        </div>
        <div class="home-page__start-block parallelogram">
          <h4>Make a profit</h4>
          <p>multiply using referral system</p>
          <link-button to="#" underline>Join the game</link-button>
        </div>
      </div>
    </section>

    <section class="home-page__beads">
      <el-row align="middle">
        <el-col :xs="24" :span="12" class="p-r mb-xs-32">
          <client-only>
            <cover-text text="Take a profit in" :angle="isMobile ? 6 : 9.5" />
          </client-only>

          <div class="home-page__beads-image-wrapper">
            <base-icon name="blocks" class="home-page__beads-image" />
          </div>
        </el-col>
        <el-col :xs="24" :span="12" class="pl-10 pl-sm-60">
          <h2> Game <span class="color-orange">“Beads”</span> </h2>
          <div class="mb-48 mb-xs-32 mt-24 mt-xs-14 pr-xs-10">
            <p class="home-page__beads-text">
              From the purchase of a place by a new player, paid: <br />
              - 30% for the nearest three players waiting in line; <br />
              - 7% on referral rewards; <br />
              - 3% registration free.
            </p>
            <p class="mt-10 mt-xs-20 home-page__beads-text">
              Each seat purchased entitles you to receive 4 payments of 30% each, for a total of 120%.
            </p>
            <p class="mt-10 mt-xs-20 home-page__beads-text">
              From each payment of 30%, a portion (25%) is set aside for the purchase of the next seat, and the
              remaining 5% is paid as a reward.
            </p>
            <p class="mt-10 mt-xs-20 home-page__beads-text">
              After 4 payouts, the next place is automatically purchased with payment to the next players.
            </p>
          </div>

          <link-button outline :to="ROUTE_PATHS.HowWorks">How it works?</link-button>
        </el-col>
      </el-row>
    </section>

    <player-transactions class="transactions">
      <template #title>
        <h2 class="transactions__title">Latest transactions</h2>
      </template>
    </player-transactions>

    <client-only>
      <div class="home-page__bg-1">
        <img src="@@/assets/images/bg-1.png" />
      </div>

      <div class="home-page__bg">
        <img src="@@/assets/images/bg-3.png" />
      </div>

      <div class="home-page__bg-3">
        <img src="@@/assets/images/bg-5.png" />
      </div>

      <div class="home-page__bg-4">
        <img src="@@/assets/images/bg-6.png" />
      </div>

      <div v-if="isMobile" class="home-page__bg-5">
        <img src="@@/assets/images/bg-beads-mobile.png" />
      </div>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_PATHS } from '~/components/shared/constants'
import { BaseIcon } from '~/components/shared/ui'
import { useScreen } from '~/components/shared/lib/composables'

// useHead({
//   meta: [{ property: 'og:title', content: 'This is the main page with general information about the project' }],
// })

const { isMobile } = useScreen()
</script>

<style lang="scss" scoped>
.home-page {
  padding: 0 10px;
  margin-bottom: 200px;

  &__blocks-mobile {
    top: 600px;
    left: 0;
    right: 0;
    width: 100%;
    height: 370px;
    position: absolute;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .s-icon {
    &--hero-blocks {
      left: 49%;
      bottom: -56px;
      width: 100%;
      height: 113%;
      max-width: 1294px;
      max-height: 747px;
      position: absolute;
      transform: translateX(-49%);
      z-index: -1;
    }
  }

  &__bg {
    top: 0;
    right: 0;
    width: auto;
    height: auto;
    position: absolute;
    z-index: -1;

    &-1 {
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      position: absolute;
      z-index: -1;
    }

    &-3 {
      left: 0;
      bottom: 60px;
      width: auto;
      height: auto;
      position: absolute;
      z-index: -1;
    }

    &-4 {
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      position: absolute;
      z-index: -1;
    }

    &-5 {
      top: 37%;
      right: 0;
      bottom: 50%;
      width: 100%;
      height: 897px;
      position: absolute;
      z-index: -1;
    }
  }

  &__beads {
    max-width: 1062px;
    position: relative;
    margin-top: 200px;

    .cover-text {
      top: -3px;
      right: -23px;
      z-index: 2;

      @include responsive(xs) {
        top: -14px;
        right: 10px;
        padding: 9px 18px;
      }
    }

    .link-button {
      width: 205px;

      @include responsive(xs) {
        width: 235px;
      }
    }

    h2 {
      @include responsive(xs) {
        @include font(28px, 33px, 700);

        margin-bottom: 14px !important;
      }
    }

    p {
      @include font(16px, 22px, 300);

      color: $color--gray-2;

      @include responsive(xs) {
        @include font(14px, 20px, 300);
      }
    }

    &-image {
      width: 100%;
      height: 100%;

      &-wrapper {
        width: 100%;
        height: 589px;
        max-width: 510px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background: radial-gradient(50% 50% at 50% 50%, rgb(255 255 255 / 0) 0%, rgb(255 255 255 / 0) 100%),
          $color--background-2;

        @include responsive(xs) {
          width: 100%;
          max-width: 338px;
          max-height: 390px;
        }
      }

      @include responsive(xs) {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }

    @include responsive(xs) {
      margin-top: 95px;
    }
  }

  &__subtitle {
    @include font(50px, 60px, 700);

    letter-spacing: 0.01em;
    text-align: center;

    @include responsive(sm, $breakpoints-only-max) {
      @include font(28px, 34px, 700);

      margin-bottom: 24px;
    }
  }

  &__timer {
    max-width: 889px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 70px;

    .base-icon {
      top: -195px;
      right: -50px;
      width: 260px;
      height: 171px;
      position: absolute;

      &.s-icon--line-3--mobile {
        display: none;
      }

      @include responsive(md, $breakpoints-only-max) {
        top: -155px;
        right: 40px;
        width: 190px;
        height: 121px;
      }
    }

    .cover-text {
      top: -12px;
      right: -55px;

      @include responsive(md, $breakpoints-only-max) {
        top: -22px;
        right: 5px;
      }

      @media screen and (width <= 842px) {
        top: -62px;
        right: 50%;
        transform: rotate(0deg) translateX(50%) !important;
      }

      @media screen and (width <= 440px) {
        top: -56px;
        padding: 8px 20px;
      }
    }

    &-section {
      margin-top: 200px;

      @media screen and (width <= 842px) {
        position: relative;

        .home-page__subtitle {
          margin-top: 80px;
        }
      }

      @media screen and (width <= 440px) {
        .home-page__subtitle {
          margin-top: 53px;
        }
      }

      @include responsive(xs) {
        margin-top: 20px;
      }
    }

    &-title {
      @include font(60px, 72px, 600);

      margin-bottom: 5px;

      @media screen and (width <= 842px) {
        @include font(34px, 41px, 600);
      }
    }

    &-subtitle {
      @include font(16px, 19px, 300);

      color: $color--gray-3;

      @media screen and (width <= 842px) {
        @include font(14px, 17px, 300);
      }
    }

    &-inner {
      display: flex;
      align-items: center;

      &:first-child {
        .home-page {
          &__timer {
            &-colon {
              margin-right: 24px;

              @media screen and (width <= 440px) {
                margin-right: 12px;
              }
            }

            &-block {
              &:first-child {
                margin-right: 20px;

                @media screen and (width <= 440px) {
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }

      &:nth-child(3) {
        .home-page {
          &__timer {
            &-colon {
              margin-left: 24px;

              @media screen and (width <= 440px) {
                margin-left: 12px;
              }
            }

            &-block {
              &:last-child {
                margin-left: 20px;

                @media screen and (width <= 440px) {
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }

    &-colon {
      @include font(48px, 58px, 600);

      top: -7px;
      left: 2px;
      position: relative;
      font-family: 'Inter', serif;
      color: $color--gray-4;
    }

    &-block {
      width: 180px;
      height: 147px;
      text-align: center;
      padding: 20px 30px;

      &.parallelogram {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &::before {
          border: 1px solid rgb(255 255 255 / 0.1);
          background: linear-gradient(
            120.37deg,
            rgb(68 70 92 / 0.31) 41.73%,
            rgb(78 80 118 / 0.31) 217.21%,
            rgb(91 94 153 / 0.31) 365.69%
          );
          backdrop-filter: blur(4.5px);

          @media screen and (width <= 842px) {
            border-radius: 10px;
            transform: skew(-4deg);
          }
        }
      }

      @media screen and (width <= 842px) {
        padding: 18px;
      }

      @media screen and (width <= 440px) {
        height: 99px;
      }
    }

    @media screen and (width <= 842px) {
      justify-content: center;

      .s-icon--line-3 {
        display: none;
      }

      .s-icon--line-3--mobile {
        top: -70px !important;
        right: calc(50% - 110px) !important;
        width: 38px !important;
        height: 28px !important;
        position: absolute;
        display: block !important;
      }

      .home-page {
        &__timer {
          &-colon-middle {
            display: none;
          }

          &-inner {
            width: 100%;
            justify-content: center;

            &:first-child {
              margin-bottom: 10px;
            }
          }
        }
      }
    }

    @media screen and (width <= 440px) {
      margin-top: 80px;
    }
  }

  &__transactions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;

    @include responsive(xs) {
      margin-bottom: 60px;
    }
  }

  &__start {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 49px;
    row-gap: 20px;

    &-bg {
      top: 470px;
      left: 0;
      width: auto;
      height: auto;
      position: absolute;
      z-index: -1;

      &-1 {
        top: 760px;
        right: 0;
        width: auto;
        height: auto;
        position: absolute;
        z-index: -1;
      }
    }

    .cover-text {
      top: -15px;
      left: 0;

      @include responsive(xs) {
        top: -16px;
        left: 5px;
        padding: 7px 19px;
      }
    }

    .base-icon {
      top: -87px;
      left: 109px;
      width: 247px;
      height: 58px;
      position: absolute;

      @include responsive(xs) {
        top: -69px;
        left: 32px;
        width: 25px;
        height: 46px;
      }
    }

    h4 {
      @include font(24px, 29px, 700);

      letter-spacing: 0.01em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    p {
      @include font(15px, 18px);

      letter-spacing: 0.01em;
      color: $color--gray-5;
      margin-bottom: 24px;
    }

    .circle {
      top: -24px;
      right: 0;
      width: 48px;
      height: 48px;
      position: absolute;
      border: 1px solid rgba($color--white, 0.2);
      border-radius: 50%;
      background-color: $color--background;
    }

    &-block {
      width: 357px;
      height: 196px;
      padding: 30px;

      &:not(:last-child) {
        @include responsive(xs-small) {
          margin-right: 0;
        }
      }

      &:last-child {
        &.parallelogram {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &::before {
            border: 1px solid rgb(255 255 255 / 0.1);
            border-radius: 15px;
            background: linear-gradient(112.89deg, #745bd7 25.01%, #835bd7 50.94%, #9c64e3 72.88%, #9c64e3 72.88%);
            backdrop-filter: blur(4.5px);
          }

          @include responsive(md, $breakpoints-only-max) {
            padding: 32px 35px;
          }

          @include responsive(xs) {
            width: 100%;

            &::before {
              border-radius: 10px;
              transform: skew(-2deg);
            }
          }
        }
      }

      &.parallelogram {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &::before {
          border: 1px solid rgb(255 255 255 / 0.1);
          background: linear-gradient(
            120.37deg,
            rgb(68 70 92 / 0.31) 41.73%,
            rgb(78 80 118 / 0.31) 217.21%,
            rgb(91 94 153 / 0.31) 365.69%
          );
          backdrop-filter: blur(4.5px);
        }

        @include responsive(md, $breakpoints-only-max) {
          padding: 32px 35px;
        }

        @include responsive(xs) {
          width: 100%;
          margin: 0;

          &::before {
            border-radius: 10px;
            transform: skew(-2deg);
          }
        }
      }
    }

    @include responsive(md, $breakpoints-only-max) {
      padding: 20px;
    }

    @include responsive(xs) {
      padding: 0;
    }
  }

  @include responsive(xs) {
    margin-bottom: 60px;
  }
}

.divider {
  width: 100%;
  height: 1px;
  background: transparent radial-gradient(rgba($color--white, 1), rgba($color--white, 0));
  margin-bottom: 112px;
  opacity: 0.1;

  @include responsive(sm, $breakpoints-only-max) {
    margin-bottom: 60px;
  }
}

.transactions {
  margin-top: 200px;

  &__title {
    @include font(50px, 60px, 700);

    letter-spacing: 0.01em;
    text-align: center;
    margin-bottom: 48px;

    @include responsive(xs) {
      @include font(28px, 33px, 700);

      margin-bottom: 24px;
    }
  }

  @include responsive(xs) {
    margin-top: 60px;
  }
}
</style>
