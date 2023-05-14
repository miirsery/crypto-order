<template>
  <footer class="base-footer">
    <div class="base-footer__header">
      <div class="mb-24">
        <h2 class="mb-24 mr-48">Connect to us in Telegram</h2>
        <link-button page-name="#" />
      </div>
      <div>Stay informed. News, Promo, Level updates etc.</div>
    </div>
    <div class="base-footer__main">
      <div>
        <base-icon name="logo-2" width="178" height="30" />

        <div>
          <p>How it works?</p>
          <p>Support</p>
        </div>

        <div class="d-f ai-c">
          <el-button class="mr-24 mr-xs-14" type="primary">Connect Wallet</el-button>

          <el-select v-model="selectedLanguage" class="m-2" placeholder="en">
            <el-option v-for="{ label, value } in languages" :key="value" :label="label" :value="value" />
          </el-select>
        </div>
      </div>

      <div class="divider" />

      <div>
        <div>All rights reserved ©2023</div>

        <div>
          <p>Support Telegram Bot</p>
          <p>Privace Policy</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const selectedLanguage = ref('')

const languages = [
  {
    label: 'En (USA)',
    value: 'en',
  },
  {
    label: 'Ru (Russia)',
    value: 'ru',
  },
  {
    label: 'ch (China)',
    value: 'ch',
  },
]
</script>
