<template>
  <div class="personal-account">
    <h3 class="mb-48">Личный кабинет</h3>

    <player-position />

    <player-statistic />

    <player-referral />

    <player-calculator />
  </div>
</template>

<style lang="scss" scoped src="@/pages/personal-account/PersonalAccount.scss">
.personal-account {
  padding: 0 10px;
  margin-top: 80px;
  margin-bottom: 200px;

  @include responsive(xs) {
    margin-bottom: 60px;
  }
}
</style>
