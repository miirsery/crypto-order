<template>
  <div class="personal-account">
    <h3 class="mb-48">Личный кабинет</h3>

    <player-position />

    <player-statistic />

    <player-payout />

    <player-referral />

    <player-calculator />
  </div>
</template>

<style lang="scss" scoped>
.personal-account {
  padding: 0 10px;
  margin-top: 80px;
  margin-bottom: 200px;

  @include responsive(xs) {
    margin-bottom: 60px;
  }
}
</style>
