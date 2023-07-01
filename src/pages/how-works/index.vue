<template>
  <div class="how-works">
    <div class="divider" />

    <client-only>
      <div class="how-works__bg-1">
        <img src="@@/assets/images/bg-1.png" />
      </div>

      <template v-if="!isMobile">
        <div class="how-works__bg-2">
          <img src="@@/assets/images/how-works/bg-7.png" />
        </div>

        <div class="how-works__bg-3">
          <img src="@@/assets/images/how-works/bg-8.png" />
        </div>
      </template>

      <div v-if="isMobile" class="how-works__bg-2--mobile">
        <img src="@@/assets/images/how-works/bg-7-mobile.png" />
      </div>
    </client-only>

    <el-row :gutter="isMobile ? 0 : 24">
      <el-col :xs="24" :sm="24" :md="7" class="mb-32 mb-md-0">
        <client-only>
          <how-works-sidebar v-if="!isMobile" />
          <how-works-sidebar-mobile v-else />
        </client-only>
      </el-col>

      <el-col :xs="24" :sm="24" :md="17">
        <div id="about-game" class="mb-48">
          <h3 class="mb-24">About game</h3>
          <p class="how-works__text">The BNB Game is an auto decentralized BNB game based on smart contracts </p>
          <br />
          <p class="how-works__text">
            A game with a referral system where each player makes a profit from new participants
          </p>
        </div>
        <div id="structure" class="mb-48">
          <h3 class="mb-24">Structure of game</h3>
          <p class="how-works__text">
            The game has 10 levels that open gradually, according to the schedule. As you play, levels open from the
            lowest (cheapest) to the highest. Each level is a separate structure.
          </p>
          <br />
          <p class="how-works__text semi-bold color-white">
            The player activates one or more of the available levels in order to earn income. When a level is activated,
            the player occupies the last line in the level chain.
          </p>
          <br />
          <p class="how-works__text">
            Part of the deposit goes to higher players, and part is distributed to their referrals.
          </p>
          <br />
          <p class="how-works__text mb-24">
            Thus, by occupying a place on the line, you will receive a basic reward from new players.
          </p>

          <div class="how-works__structure mb-24">
            <img src="@@/assets/images/structure.png" alt="Structure of game" />
          </div>
          <p class="how-works__text">
            As soon as a player receives 2 times his basic income, then his level is closed. To play further, you need
            to activate this level again.
          </p>
          <br />
          <p class="how-works__text semi-bold color-white">
            The player, having activated the level again, falls to the very bottom of the chain, thereby stimulating him
            to participate in the BNB game further.
          </p>
        </div>

        <el-button class="w-100 py-14" type="primary">Connect Wallet</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useScreen } from '~/components/shared/lib/composables'
// eslint-disable-next-line max-len
import HowWorksSidebarMobile from '~/components/pages/HowWorks/HowWorksSidebar/HowWorksSidebarMobile/HowWorksSidebarMobile.vue'

const { isMobile } = useScreen()
</script>

<style lang="scss" scoped>
.how-works {
  padding: 0 10px;
  margin-bottom: 112px;

  &__bg {
    &-1 {
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      position: absolute;
      z-index: -1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-2 {
      left: 0;
      bottom: 0;
      width: auto;
      height: auto;
      position: absolute;
      z-index: -1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &--mobile {
        left: 0;
        bottom: 0;
        width: auto;
        height: auto;
        position: absolute;
        z-index: -1;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &-3 {
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      position: absolute;
      z-index: -1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  h3 {
    @include font(28px, 33px, 700);
  }

  &__text {
    @include font(18px, 22px, 300);

    color: $color--gray-2;

    @include responsive(xs) {
      @include font(14px, 17px, 300);
    }
  }

  &__structure {
    width: 100%;
    height: 100%;
    max-width: 720px;
    max-height: 543px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
  margin-bottom: 80px;
  opacity: 0.1;

  @include responsive(xs) {
    margin-bottom: 32px;
  }
}
</style>
