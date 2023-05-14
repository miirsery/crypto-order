<template>
  <aside class="how-works-sidebar">
    <h4 class="how-works-sidebar__title">Table of contents</h4>

    <hr />

    <div class="how-works-sidebar__content">
      <ul class="mb-32">
        <li class="how-works-sidebar__link" :class="{ active: isActive('') }" @click="scrollToSection('')">
          <nuxt-link :to="{ path: '/how-works' }">About game</nuxt-link>
        </li>
        <li
          class="how-works-sidebar__link"
          :class="{ active: isActive('#structure') }"
          @click="scrollToSection('structure')"
        >
          <nuxt-link :to="{ path: '/how-works', hash: '#structure' }">Structure of game</nuxt-link>
        </li>
        <li
          class="how-works-sidebar__link"
          :class="{ active: isActive('#schedule') }"
          @click="scrollToSection('schedule')"
        >
          <nuxt-link :to="{ path: '/how-works', hash: '#schedule' }">Level schedule</nuxt-link>
        </li>
        <li class="how-works-sidebar__link" :class="{ active: isActive('#level') }" @click="scrollToSection('level')">
          <nuxt-link :to="{ path: '/how-works', hash: '#about' }"> Level Activation </nuxt-link>
        </li>
        <li
          class="how-works-sidebar__link"
          :class="{ active: isActive('#rewards') }"
          @click="scrollToSection('rewards')"
        >
          <nuxt-link :to="{ path: '/how-works', hash: '#rewards' }">Rewards</nuxt-link>
        </li>
        <li class="how-works-sidebar__link" :class="{ active: isActive('#cycles') }" @click="scrollToSection('cycles')">
          <nuxt-link :to="{ path: '/how-works', hash: '#cycles and recycles' }">Cycles and recycles</nuxt-link>
        </li>
      </ul>

      <el-button class="how-works-sidebar__connect-button" type="primary">Connect Wallet</el-button>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const isActive = (sectionHash: string): boolean => {
  return route.hash === sectionHash
}

const scrollToSection = (section: string) => {
  if (!section.length) {
    router.replace({ path: 'how-works' })

    return
  }

  const page = document.getElementById('.how-works')
  const sectionBlock = document.querySelector(section) as HTMLElement

  if (!page || !sectionBlock) return

  const navHeight = page.offsetHeight

  window.scrollTo({
    top: sectionBlock.offsetTop - navHeight,
    behavior: 'smooth',
  })
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
  background: #191c2e;
  backdrop-filter: blur(4.5px);

  &__connect-button {
    padding: 14px 54px;
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
      }
    }
  }

  &__title {
    padding: 30px 42px 32px 32px;
  }

  &__content {
    padding: 0 42px 32px 32px;
  }

  hr {
    height: 1px;
    border: none;
    background-color: rgba($color--white, 0.2);
  }
}
</style>
