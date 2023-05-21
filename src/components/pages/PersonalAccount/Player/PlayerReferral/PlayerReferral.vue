<template>
  <div class="d-f ai-c jc-sb fd-xs-c mb-32 w-100 mb-xs-0 jc-xs-c">
    <div class="referral">
      <div class="d-f ai-fs ai-md-c fd-c fd-md-r ai-xs-fs">
        <div class="referral__image-wrapper">
          <img src="@@/assets/images/account/cube.png" />
        </div>
        <div class="w-100">
          <div class="personal-account__title">Your referral link</div>

          <div class="referral__text">
            Invite your friends to ChainGame at the link below, wait, until they get into the game and earn.
          </div>

          <div class="d-f ai-c">
            <el-input v-model="referralLink" class="referral__link" />

            <el-tooltip v-if="isClient" placement="top" :visible="isReferralLinkCopiedTooltipVisible" effect="dark">
              <div class="referral__clipboard-icon" @click="handleReferralLinkCopy(referralLink)">
                <base-icon name="clipboard" class="icon-24" />
              </div>

              <template #content>
                <div>Copied</div>
              </template>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>

    <div class="referral">
      <div class="personal-account__title"> Referral Information </div>

      <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-14">
        <div class="personal-account__text">Total involved</div>
        <base-tag text="24" class="ml-24" />
      </div>
      <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-14">
        <div class="personal-account__text">Received payouts</div>
        <base-tag text="43" class="ml-24" />
      </div>
      <div class="d-f ai-c w-xs-100 jc-sb">
        <div class="personal-account__text">Total received</div>
        <base-tag class="ml-24" mode="primary" text="$301" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const referralLink = ref('www.xxx.yy?ref=0xXXX…XXX')

const isReferralLinkCopiedTooltipVisible = ref(false)
const isClient = ref(false)
const { copy: handleReferralLinkCopy, copied: isReferralLinkCopied } = useClipboard({ source: referralLink })

watch(
  () => isReferralLinkCopied.value,
  () => {
    if (isReferralLinkCopied.value) {
      isReferralLinkCopiedTooltipVisible.value = true

      setTimeout(() => {
        isReferralLinkCopiedTooltipVisible.value = false
      }, 700)
    }
  }
)

onMounted(() => {
  isClient.value = true
})
</script>

<style lang="scss" scoped src="@/pages/personal-account/PersonalAccount.scss">
.referral {
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 15px;
  background: linear-gradient(257.79deg, #2d1e4d -11.85%, #191c2e 58.89%);
  backdrop-filter: blur(4.5px);

  .personal-account {
    &__title {
      white-space: nowrap;
      margin-bottom: 24px;
    }
  }

  &__image-wrapper {
    margin-right: 48px;

    @include responsive(sm, $breakpoints-only-max) {
      margin-right: 0;
      margin-bottom: 32px;
    }
  }

  &__text {
    @include font(16px, 22px, 400);

    letter-spacing: 0.01em;
    color: $color--gray-10;
    margin-bottom: 48px;
  }

  &__link {
    :deep(.el-input__wrapper) {
      height: 51px;
    }
  }

  &__clipboard {
    &-icon {
      width: 82px;
      height: 51px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: $color--primary;
      cursor: pointer;
      margin-left: 14px;
    }
  }

  &:first-child {
    height: 296px;
    padding: 32px 48px;
    margin-right: 32px;

    @include responsive(md, $breakpoints-only-max) {
      height: auto;
    }

    @include responsive(xs) {
      margin-right: 0;
    }
  }

  &:last-child {
    height: 296px;
    padding: 48px;
  }

  @include responsive(xs) {
    width: 100%;
    margin-bottom: 14px;
  }
}
</style>
