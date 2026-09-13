<template>
  <Teleport to="body">
    <div v-if="uiState.phoneVisible" class="phone-modal active" @click.self="uiActions.closePhone()">
      <div class="phone-container">
        <h3>我的电话号码</h3>
        <p class="phone-number">{{ site.phone }}</p>
        <button class="copy-phone" :class="{ copied }" @click="copy">{{ copied ? '已复制！' : '点击复制' }}</button>
        <button class="close-phone-modal" @click="uiActions.closePhone()"><i class="fas fa-times"></i></button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { uiState, uiActions } from '@/store/ui'
import { site } from '@/data/site'

const copied = ref(false)
function copy() {
  navigator.clipboard.writeText(site.phone).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  })
}
</script>