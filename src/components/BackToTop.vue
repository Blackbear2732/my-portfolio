<template>
  <button class="back-to-top" :class="{ visible: show }" @click="toTop">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const show = ref(false)
function onScroll() { show.value = window.scrollY > 300 }
function toTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>