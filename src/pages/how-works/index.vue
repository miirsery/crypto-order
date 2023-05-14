<template>
  <el-row class="how-works">
    <el-col :span="7">
      <client-only>
        <how-works-sidebar />
      </client-only>
    </el-col>

    <el-col :span="17">
      <div class="mb-48">
        <h3>About game</h3>
        <p class="how-works__text">The BNB Game is an auto decentralized BNB game based on smart contracts </p>
        <p class="how-works__text">
          A game with a referral system where each player makes a profit from new participants
        </p>
      </div>
      <div id="structure" class="mb-24">
        <h3>Structure of game</h3>
        <p class="how-works__text">
          The game has 10 levels that open gradually, according to the schedule. As you play, levels open from the
          lowest (cheapest) to the highest. Each level is a separate structure.
        </p>
        <p class="how-works__text bold color-white">
          The player activates one or more of the available levels in order to earn income. When a level is activated,
          the player occupies the last line in the level chain.
        </p>
        <p> Part of the deposit goes to higher players, and part is distributed to their referrals. </p>
        <p class="how-works__text">
          Thus, by occupying a place on the line, you will receive a basic reward from new players.
        </p>

        <div class="how-works__structure mb-24">
          <img src="@@/assets/images/structure.png" alt="Structure of game" />
        </div>
        <p class="how-works__text">
          As soon as a player receives 2 times his basic income, then his level is closed. To play further, you need to
          activate this level again.
        </p>
        <p class="how-works__text bold color-white">
          The player, having activated the level again, falls to the very bottom of the chain, thereby stimulating him
          to participate in the BNB game further.
        </p>
      </div>

      <el-button class="w-100" type="primary">Connect Wallet</el-button>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.how-works {
  &__text {
    @include font(18px, 22px, 300);

    color: $color--gray-2;
  }

  &__structure {
    width: 720px;
    height: 543px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
