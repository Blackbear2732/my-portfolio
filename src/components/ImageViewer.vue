<template>
  <Teleport to="body">
    <div v-if="uiState.imageViewer.visible" class="image-viewer" @click.self="uiActions.closeImageViewer()">
      <span class="close-viewer" @click="uiActions.closeImageViewer()">&times;</span>
      <div class="viewer-info">
        <h3 class="viewer-title">{{ current.title }}</h3>
        <p class="viewer-date">{{ current.date }}</p>
      </div>
      <img id="viewer-image" :src="asset(current.src)" :alt="current.title" />
      <div class="image-description">{{ current.desc }}</div>
      <button class="viewer-prev" @click.stop="prev"><i class="fas fa-chevron-left"></i></button>
      <button class="viewer-next" @click.stop="next"><i class="fas fa-chevron-right"></i></button>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { uiState, uiActions } from '@/store/ui'
import { asset } from '@/utils/asset'

const current = computed(() => {
  const { items, index } = uiState.imageViewer
  return items[index] || { title: '', date: '', desc: '', src: '' }
})

function prev() {
  const { items, index } = uiState.imageViewer
  uiActions.setImageIndex((index - 1 + items.length) % items.length)
}
function next() {
  const { items, index } = uiState.imageViewer
  uiActions.setImageIndex((index + 1) % items.length)
}
function onKey(e) {
  if (!uiState.imageViewer.visible) return
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'Escape') uiActions.closeImageViewer()
}
onMounted(() => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>