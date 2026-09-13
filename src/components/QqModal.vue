<template>
  <Teleport to="body">
    <div v-if="uiState.qqVisible" class="qq-modal active" @click.self="uiActions.closeQq()">
      <div class="qq-container">
        <h3>我的QQ号</h3>
        <p class="qq-number">{{ site.qq }}</p>
        <button class="copy-qq" :class="{ copied }" @click="copy">{{ copied ? '已复制！' : '点击复制' }}</button>
        <button class="close-qq-modal" @click="uiActions.closeQq()"><i class="fas fa-times"></i></button>
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
  navigator.clipboard.writeText(site.qq).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  })
}
</script>