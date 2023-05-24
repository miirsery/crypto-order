<template>
  <div class="main-layout">
    <div class="main-layout__content">
      <base-header />

      <nuxt-page />
    </div>

    <base-footer />

    <client-only>
      <el-dialog
        v-model="isReferralDialogVisible"
        center
        :show-close="false"
        :fullscreen="isMobile"
        class="referral-dialog"
        modal-class="referral-dialog__modal"
      >
        <h3 class="referral-dialog__title">Внимание!</h3>

        <base-icon
          name="close"
          width="30"
          height="30"
          class="referral-dialog__close"
          @click="handleReferralDialogClose"
        />

        <div class="referral-dialog__text">
          Вы зашли без реферальной ссылки. Пожалуйста, попросите реферальную ссылку у человека, который рассказал вам об
          игре, и перейдите по ней.
          <br />
          Если у вас нет такого человека, вы можете воспользоваться реферальной ссылкой по умолчанию.
        </div>

        <el-button class="referral-dialog__button" type="primary" @click="handleReferralDialogClose">Окей</el-button>

        <div class="referral-dialog__default" @click="handleDefaultLinkUse"> Использовать ссылку по умолчанию </div>
      </el-dialog>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { useScreen, useWallet } from '~/components/shared/lib/composables'

const route = useRoute()

const { isMobile } = useScreen()

const { isWalletConnected } = useWallet()

const isReferralDialogHidden = ref(false)
const isReferralDialogVisible = computed(() => {
  const dialogShown = sessionStorage.getItem('is-dialog-shown') ?? ''

  return !route.query.ref && !isWalletConnected.value && !isReferralDialogHidden.value && dialogShown !== 'true'
})

watch(
  () => [isReferralDialogHidden.value, document],
  () => {
    if (document && !isReferralDialogHidden.value) {
      sessionStorage.setItem('is-dialog-shown', 'false')
    } else {
      sessionStorage.setItem('is-dialog-shown', 'true')
    }
  }
)

onMounted(() => {
  if (process.client) {
    if (!route.query?.ref) {
      return
    }

    sessionStorage.setItem('referral-link', route.query.ref.toString())
  }
})

const handleReferralDialogClose = (): void => {
  sessionStorage.setItem('is-dialog-shown', 'true')

  isReferralDialogHidden.value = true
}

const handleDefaultLinkUse = (): void => {
  // TODO: чот должно делать

  handleReferralDialogClose()
}
</script>

<style lang="scss" scoped>
.main-layout {
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('@@/assets/images/bg-line.png') repeat-y;
    opacity: 0.05;
    z-index: -1;
    inset: 0;
  }

  &__content {
    max-width: 1175px;
    margin: 0 auto;
  }
}

.referral-dialog {
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    @include font(40px, 48px, 700);

    letter-spacing: 0.01em;
    text-align: center;
    margin: 48px 0 32px;
  }

  &__text {
    @include font(16px, 22px);

    max-width: 520px;
    text-align: center;
    color: $color--white;
    margin: 0 auto 48px;
  }

  &__close {
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    margin: 32px;
  }

  &__button {
    @include font(16px, 19px, 700);

    width: 100%;
    max-width: 374px;
    padding: 16px 0;
    margin-bottom: 27px;
  }

  &__default {
    @include font(14px, 17px);

    border-bottom: 1px solid $color--gray;
    text-align: center;
    color: $color--gray;
  }
}
</style>
