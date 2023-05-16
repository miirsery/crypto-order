<template>
  <section class="support-grid mb-112 mb-xs-60 d-f">
    <div class="support-write">
      <h3>Write to us</h3>
      <div class="support-page__form">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
          <div class="support-page__form-top">
            <el-form-item label="Your name" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="E-mail" prop="email">
              <el-input v-model="ruleForm.email" type="email" />
            </el-form-item>
          </div>
          <div class="support-page__form-bot">
            <el-form-item label="Your question" prop="question">
              <el-input
                v-model="ruleForm.question"
                type="textarea"
                rows="7"
                class="input-question__scrollbar"
                resize="none"
              />
            </el-form-item>
          </div>
          <el-form-item>
            <el-checkbox v-model="ruleForm.agreePrivacyPolicy">
              I agree with the <el-link type="primary" @click="navigateToPrivacyPolicy">Privaci Poilicy</el-link>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              class="support-page__send-button"
              type="primary"
              :disabled="!ruleForm.agreePrivacyPolicy"
              @click="submitForm(ruleFormRef)"
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
        <div class="support-contacts__item">
          <div class="support-contacts__item-main">
            <img class="support-contacts__item-image" src="@@/assets/images/Icon-VR.png" alt="support telegram bot" />
            <div class="support-contacts__item-caption">
              <h4 class="support-contacts__item-title">Support Telegram Bot</h4>
              <span class="support-contacts__item-description">Write here if you have any problems</span>
            </div>
          </div>
          <div class="support-contacts__button"><h4 class="support-contacts__button-text">GO</h4></div>
        </div>
        <div class="support-contacts__item">
          <div class="support-contacts__item-main">
            <img
              class="support-contacts__item-image"
              src="@@/assets/images/Icon-EmailVerification.png"
              alt="support telegram chat"
            />
            <div class="support-contacts__item-caption">
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

const ruleFormRef = ref<FormInstance>()
const router = useRouter()

const navigateToPrivacyPolicy = (event: MouseEvent) => {
  event.preventDefault()

  router.push(router.currentRoute.value.path)
}

const ruleForm = reactive({
  name: '',
  email: '',
  question: '',
  agreePrivacyPolicy: false,
})

const rules = reactive<FormRules>({
  name: [{ required: true, trigger: 'blur' }],
  email: [{ required: true, trigger: 'blur' }],
  question: [{ required: true, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')

      return false
    }
  })
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 48px;
}

h4 {
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 14px;
}

.support-grid {
  display: grid;
  gap: 32px;
}

.support-write {
  .support-page {
    margin-top: 48px;

    &__form {
      width: 564px;
      height: 494px;
      border: 1px solid rgb(255 255 255 / 0.2);
      border-radius: 15px;
      background-color: $color--background-1;
      padding: 32px;
      backdrop-filter: blur(4.5px);
    }

    &__form-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 47px;
    }

    &__form-bot {
      width: 500px;
      height: 190px;
      margin-bottom: 16.5px;
    }

    &__send-button {
      padding: 14px 232.5px;
    }
  }
}

.support-contacts {
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
    justify-content: space-between;
  }

  &__list {
    display: grid;
    gap: 32px;

    .support-contacts__item {
      width: 564px;
      height: 231px;
      display: flex;
      border: 1px solid rgb(255 255 255 / 0.2);
      border-radius: 15px;
      background-color: $color--background-1;
      backdrop-filter: blur(4.5px);
    }

    .support-contacts__item-image {
      padding-left: 10px;
    }

    .support-contacts__item-caption {
      padding-left: 32px;
    }

    .support-contacts__item-title {
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      margin-bottom: 14px;
    }

    .support-contacts__item-description {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.01em;
      color: $color--gray-9;
    }
  }
}
</style>
