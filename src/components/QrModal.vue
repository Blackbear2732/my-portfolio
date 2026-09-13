<template>
  <Teleport to="body">
    <div v-if="uiState.wechatVisible" class="qr-modal active" @click.self="uiActions.closeWechat()">
      <div class="qr-container">
        <img :src="asset(site.wechatQr)" alt="微信二维码" />
        <p>扫码添加微信</p>
        <button class="close-modal" @click="uiActions.closeWechat()"><i class="fas fa-times"></i></button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { uiState, uiActions } from '@/store/ui'
import { site } from '@/data/site'
import { asset } from '@/utils/asset'
</script>