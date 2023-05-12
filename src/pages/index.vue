<template>
  <div class="home-page">
    <section class="mb-200 mb-xs-20">
      <hero-info />
      <hero-stats />
    </section>

    <section class="mb-200 mb-xs-20">
      <div class="home-page__timer">
        <div class="home-page__timer-block parallelogram">
          <h3>11</h3>
          <p>Days</p>
        </div>
        <div class="home-page__item-colon"> : </div>

        <div class="home-page__timer-block parallelogram">
          <h3>09</h3>
          <p>Hours</p>
        </div>
        <div class="home-page__item-colon"> : </div>

        <div class="home-page__timer-block parallelogram">
          <h3>54</h3>
          <p>Minutes</p>
        </div>
        <div class="home-page__item-colon"> : </div>

        <div class="home-page__timer-block parallelogram">
          <h3>21</h3>
          <p>Seconds</p>
        </div>
      </div>
    </section>

    <section class="mb-200 mb-xs-20">
      <div class="home-page__start">
        <div class="home-page__start-block parallelogram">
          <h4>Connect wallet</h4>
          <p>connect your MetaMask wallet</p>
          <nuxt-link to="#">To plug</nuxt-link>
        </div>
        <div class="home-page__start-block parallelogram">
          <h4>JOIN THE GAME</h4>
          <p>and get NFT as a gift</p>
          <nuxt-link to="#">Start now!</nuxt-link>
        </div>
        <div class="home-page__start-block parallelogram">
          <h4>Make a profit</h4>
          <p>and get NFT as a gift</p>
          <nuxt-link to="#">Join the game</nuxt-link>
        </div>
      </div>
    </section>

    <section class="home-page__beads">
      <el-row>
        <el-col :xs="24" :span="12" class="home-page__beads-image-wrapper">
          <base-icon name="blocks" class="home-page__beads-image" />
        </el-col>
        <el-col :xs="24" :span="12" class="home-page__beads-image-wrapper">
          <h2> Game “Beads” </h2>
          <div>
            <p>
              From the purchase of a place by a new player, paid:- 30% for the nearest three players waiting in line;-
              7% on referral rewards;- 3% registration free.
            </p>
            <p> Each seat purchased entitles you to receive 4 payments of 30% each, for a total of 120%.</p>
            <p>
              From each payment of 30%, a portion (25%) is set aside for the purchase of the next seat, and the
              remaining 5% is paid as a reward.
            </p>
            <p>After 4 payouts, the next place is automatically purchased with payment to the next players.</p>
          </div>

          <link-button outline :page-name="'#'">How it works?</link-button>
        </el-col>
      </el-row>
    </section>

    <section class="home-page__transactions">
      <h2>Latest transactions</h2>

      <transactions-table :transactions="transactionsData" />

      <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { transactionsData } from '@/components/shared/constants'
</script>

<style lang="scss" scoped>
.home-page {
  &__beads {
    margin-bottom: 200px;

    @include responsive(xs) {
      margin-bottom: 60px;
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
}
</style>
