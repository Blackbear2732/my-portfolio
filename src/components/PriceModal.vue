<template>
  <Teleport to="body">
    <div v-if="uiState.priceVisible" class="price-modal" style="display:flex" @click.self="uiActions.closePrice()">
      <div class="price-container">
        <h3>联系咨询</h3>
        <div class="price-content">
          <div class="price-qr">
            <img :src="asset(site.wechatQr)" alt="微信二维码" />
            <p>扫码添加微信</p>
          </div>
          <div class="price-phone">
            <h4>电话号码</h4>
            <p class="price-number">{{ site.phone }}</p>
            <button class="copy-price-phone" :class="{ copied }" @click="copy">
              {{ copied ? '已复制！' : '点击复制' }}
            </button>
          </div>
        </div>
        <p class="price-tip">欢迎通过微信或电话联系我，了解详细服务内容和价格</p>
        <button class="close-price-modal" @click="uiActions.closePrice()"><i class="fas fa-times"></i></button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { uiState, uiActions } from '@/store/ui'
import { site } from '@/data/site'
import { asset } from '@/utils/asset'

const copied = ref(false)
function copy() {
  navigator.clipboard.writeText(site.phone).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  })
}
</script>