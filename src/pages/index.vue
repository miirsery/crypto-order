<template>
  <div class="home-page">
    <section class="mb-200 mb-xs-20">
      <hero-info />
      <hero-stats />
    </section>

    <section class="mb-200 mb-xs-20">
      <div class="home-page__subtitle">Game will start in:</div>

      <div class="home-page__timer">
        <div class="home-page__timer-block parallelogram">
          <h3>11</h3>
          <p>Days</p>
        </div>
        <div class="home-page__timer-colon"> : </div>

        <div class="home-page__timer-block parallelogram">
          <h3>09</h3>
          <p>Hours</p>
        </div>
        <div class="home-page__timer-colon"> : </div>

        <div class="home-page__timer-block parallelogram">
          <h3>54</h3>
          <p>Minutes</p>
        </div>
        <div class="home-page__timer-colon"> : </div>

        <div class="home-page__timer-block parallelogram">
          <h3>21</h3>
          <p>Seconds</p>
        </div>
      </div>
    </section>

    <section class="mb-200 mb-xs-20">
      <div class="home-page__subtitle">How to start?</div>

      <div class="home-page__start">
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
        <el-col :xs="24" :span="12" class="home-page__beads-image-wrapper">
          <base-icon name="blocks" class="home-page__beads-image" />
        </el-col>
        <el-col :xs="24" :span="12">
          <h2 class="mb-24"> Game <span class="color-primary">“Beads”</span> </h2>
          <div class="mb-48">
            <p>
              From the purchase of a place by a new player, paid: <br />
              - 30% for the nearest three players waiting in line; <br />
              - 7% on referral rewards; <br />
              - 3% registration free.
            </p>
            <br />
            <p> Each seat purchased entitles you to receive 4 payments of 30% each, for a total of 120%.</p>
            <br />
            <p>
              From each payment of 30%, a portion (25%) is set aside for the purchase of the next seat, and the
              remaining 5% is paid as a reward.
            </p>
            <br />
            <p>After 4 payouts, the next place is automatically purchased with payment to the next players.</p>
          </div>

          <link-button outline :to="ROUTE_PATHS.HowWorks">How it works?</link-button>
        </el-col>
      </el-row>
    </section>

    <section class="home-page__transactions">
      <h2 class="mb-48">Latest transactions</h2>

      <transactions-table :transactions="transactionsData" class="mb-48" />

      <el-pagination
        background
        :page-size="7"
        :next-icon="nextIcon"
        :prev-icon="prevIcon"
        :pager-count="2"
        layout="prev, pager, next"
        :total="63"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_PATHS, transactionsData } from '~/components/shared/constants'
import { BaseIcon } from '~/components/shared/ui'

const nextIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'arrow-right', class: 'icon-24' })
  },
})

const prevIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'arrow-left', class: 'icon-24' })
  },
})
</script>

<style lang="scss" scoped>
.home-page {
  &__beads {
    margin-bottom: 200px;

    p {
      @include font(16px, 22px, 300);

      color: $color--gray-2;
    }

    &-image {
      width: 510px;
      height: 589px;
      border-radius: 15px;
      background: radial-gradient(50% 50% at 50% 50%, rgb(255 255 255 / 0) 0%, rgb(255 255 255 / 0) 100%), #191c2e;
    }

    @include responsive(xs) {
      margin-bottom: 60px;
    }
  }

  &__subtitle {
    @include font(50px, 60px, 700);

    letter-spacing: 0.01em;
    text-align: center;
    margin-bottom: 70px;
  }

  &__timer {
    max-width: 908px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    &-colon {
      @include font(48px, 58px, 600);

      font-family: 'Inter', serif;
      color: $color--gray-4;
      margin: 0 10px;
    }

    &-block {
      width: 180px;
      height: 147px;
      text-align: center;
      padding: 20px 30px;

      h3 {
        @include font(60px, 72px, 600);

        margin-bottom: 5px;
      }

      p {
        @include font(16px, 20px, 300);

        color: $color--gray-3;
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
      }
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
    align-items: center;
    justify-content: space-between;

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
      &:last-child {
        &.parallelogram {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 75px;

          &::before {
            border: 1px solid rgb(255 255 255 / 0.1);
            border-radius: 15px;
            background: linear-gradient(112.89deg, #745bd7 25.01%, #835bd7 50.94%, #9c64e3 72.88%, #9c64e3 72.88%);
            backdrop-filter: blur(4.5px);
          }
        }
      }

      &.parallelogram {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 75px;

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
      }
    }
  }
}
</style>
