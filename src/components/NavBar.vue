<template>
  <nav class="navbar">
    <div class="nav-left" :class="{ visible: showAvatar }">
      <img :src="asset(site.avatar)" alt="头像" class="nav-avatar" :class="{ visible: showAvatar }" />
      <div class="nav-title">{{ site.title }}</div>
    </div>
    <div class="menu-icon" :class="{ active: menuOpen }" @click="menuOpen = !menuOpen">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul class="nav-menu" :class="{ active: menuOpen }">
      <li><router-link to="/" active-class="active" @click="menuOpen = false">首页</router-link></li>
      <li><router-link to="/life" active-class="active" @click="menuOpen = false">生活记录</router-link></li>
      <li><router-link to="/portfolio" active-class="active" @click="menuOpen = false">个人成就</router-link></li>
      <li><router-link to="/projects" active-class="active" @click="menuOpen = false">项目经历</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '@/data/site'
import { asset } from '@/utils/asset'

const menuOpen = ref(false)
const showAvatar = ref(false)
const route = useRoute()

function handleScroll() {
  if (route.name === 'home') {
    showAvatar.value = window.scrollY > window.innerHeight * 0.4
  } else {
    showAvatar.value = true
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>