<template>
  <aside class="how-works-sidebar">
    <h4 class="how-works-sidebar__title">Table of contents</h4>

    <hr />

    <div class="how-works-sidebar__content">
      <ul class="mb-6">
        <li
          v-for="(item, index) in menuList"
          :key="index"
          :class="{ active: isActive(item.hash) }"
          class="how-works-sidebar__link"
        >
          <nuxt-link :to="{ path: ROUTE_PATHS.HowWorks, hash: item.hash }"> {{ item.label }} </nuxt-link>
        </li>
      </ul>

      <el-button class="how-works-sidebar__connect-button" type="primary">Connect Wallet</el-button>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ROUTE_PATHS } from '~/components/shared/constants'
import { menuList } from '~/components/pages/HowWorks/HowWorksSidebar/HowWorksSidebar.constant'

const route = useRoute()

const isActive = (sectionHash: string): boolean => {
  return route.hash === sectionHash
}
</script>

<style lang="scss" scoped>
.how-works-sidebar {
  width: 100%;
  height: 446px;
  min-width: 285px;
  max-width: 265px;
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 15px;
  background: $color--background-2;
  backdrop-filter: blur(4.5px);

  &__connect-button {
    padding: 14px 54px;

    @include responsive(md, $breakpoints-only-max) {
      padding: 7px 27px;
    }
  }

  &__link {
    @include font(16px, 19px);

    position: relative;
    letter-spacing: 0.01em;
    color: $color--gray-1;
    padding: 14px 0;

    &:first-child {
      padding-top: 19px;
    }

    &.active {
      @include font(16px, 19px, 500);

      color: $color--white;

      &::after {
        content: '';
        top: 50%;
        left: -31px;
        bottom: 0;
        width: 3px;
        height: 27px;
        position: absolute;
        border-radius: 0 4px 4px 0;
        background: $color--primary;
        transform: translateY(-50%);

        @include responsive(md, $breakpoints-only-max) {
          left: -12px;
        }
      }
    }

    @include responsive(md, $breakpoints-only-max) {
      padding: 7px 0;
    }
  }

  &__title {
    padding: 30px 42px 32px 32px;

    @include responsive(md, $breakpoints-only-max) {
      padding: 30px 8px 32px 12px;
    }
  }

  &__content {
    padding: 0 42px 32px 32px;

    @include responsive(md, $breakpoints-only-max) {
      padding: 0 8px 32px 12px;
    }
  }

  hr {
    height: 1px;
    border: none;
    background-color: rgba($color--white, 0.2);
  }

  @include responsive(md, $breakpoints-only-max) {
    height: auto;
    min-width: 190px;
    margin-right: 16px;
  }
}
</style>
