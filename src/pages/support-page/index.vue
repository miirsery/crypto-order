<template>
  <section class="support">
    <div class="support-write">
      <h3 class="support-write__title">Write to us</h3>
      <div class="support-write__form">
        <el-form
          ref="supportFormInstance"
          class="support-form"
          hide-required-asterisk
          :model="supportFormModel"
          :rules="rules"
        >
          <div class="support-write__form-inputs">
            <el-form-item label="Your name" prop="name">
              <el-input v-model="supportFormModel.name" />
            </el-form-item>
            <el-form-item label="E-mail" prop="email">
              <el-input v-model="supportFormModel.email" type="email" />
            </el-form-item>
          </div>
          <el-form-item class="support-write__question" label="Your question" prop="question">
            <el-input
              v-model="supportFormModel.question"
              type="textarea"
              rows="7"
              class="textarea-scrollbar"
              resize="none"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="supportFormModel.agreePrivacyPolicy">
              I agree with the
              <nuxt-link class="support-write__privacy-policy" :to="ROUTE_PATHS.PrivacyPolicy"
                >Privacy Policy</nuxt-link
              >
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              class="support-write__send-button"
              type="primary"
              :disabled="!supportFormModel.agreePrivacyPolicy"
              @click="handleFormSubmit"
            >
              Send
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="support-contacts">
      <h3 class="support-contacts__title">Contact with us</h3>
      <div class="support-contacts__list">
        <div class="support-contacts__item mb-32">
          <div class="support-contacts__item-main">
            <img class="support-contacts__item-image" src="@@/assets/images/Icon-VR.png" alt="support telegram bot" />
            <div>
              <h4 class="support-contacts__item-title">Support Telegram Bot</h4>
              <span class="support-contacts__item-description">Write here if you have any problems</span>
            </div>
          </div>
          <div class="support-contacts__button">
            <h4 class="support-contacts__button-text">GO</h4>
          </div>
        </div>
        <div class="support-contacts__item">
          <div class="support-contacts__item-main">
            <img
              class="support-contacts__item-image"
              src="@@/assets/images/Icon-EmailVerification.png"
              alt="support telegram chat"
            />
            <div>
              <h4 class="support-contacts__item-title">News Telegram Channel</h4>
              <span class="support-contacts__item-description">Updates, news and opening levels</span>
            </div>
          </div>
          <div class="support-contacts__button"><h4 class="support-contacts__button-text">GO</h4></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { ROUTE_PATHS } from '~/components/shared/constants'

const router = useRouter()

const supportFormInstance = ref<FormInstance>()

const supportFormModel = reactive({
  name: '',
  email: '',
  question: '',
  agreePrivacyPolicy: false,
})

const rules = reactive<FormRules>({
  name: [{ required: true, message: 'Fill in the field', trigger: 'blur' }],
  email: [
    { required: true, message: 'Fill in the field', trigger: 'blur' },
    { type: 'email', message: 'Not valid email', trigger: 'blur' },
  ],
  question: [{ required: true, message: 'Fill in the field', trigger: 'blur' }],
})

const handleFormSubmit = (): void => {
  if (!supportFormInstance.value) return

  supportFormInstance.value.validate(async (valid) => {
    //TODO: Интеграция.
  })
}
</script>

<style lang="scss" scoped>
.support {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 112px;

  @include responsive(xs) {
    margin-top: 28px;
    margin-bottom: 60px;
  }
}

.support-write {
  &__title {
    margin-bottom: 48px;
  }

  &__form {
    width: 564px;
    height: 494px;
    border: 1px solid rgba($color--white, 0.2);
    border-radius: 15px;
    background-color: $color--background-2;
    padding: 32px;
    backdrop-filter: blur(4.5px);
  }

  &__form-inputs {
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 47px;
  }

  &__question {
    max-width: 500px;
    max-height: 190px;
    margin-bottom: 16.5px;
  }

  &__privacy-policy {
    border-bottom: 1px $color--primary solid;
    color: $color--primary;
  }

  &__send-button {
    padding: 14px 232.5px;
  }
}

.support-contacts {
  &__title {
    margin-bottom: 48px;
  }

  &__item-title {
    @include font(26px, 31px, 700);

    margin-bottom: 14px;
    margin-left: 32px;
  }

  &__item-description {
    @include font(16px, 19px, 300);

    letter-spacing: 0.01em;
    color: $color--gray-9;
    margin-left: 32px;
  }

  &__button {
    width: 78px;
    height: 231px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background: linear-gradient(112.89deg, #745bd7 25.01%, #835bd7 50.94%, #9c64e3 72.88%, #9c64e3 72.88%), #191c2e;
    padding-top: 95px;
    backdrop-filter: blur(4.5px);
  }

  &__button-text {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg);
  }

  &__item {
    width: 564px;
    height: 231px;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba($color--white, 0.2);
    border-radius: 15px;
    background-color: $color--background-2;
    backdrop-filter: blur(4.5px);
  }

  &__item-image {
    padding-left: 10px;
  }
}
</style>