<template>
  <section class="page-header">
    <div class="header-content">
      <i class="fas fa-laptop-code"></i>
      <h1>项目展示</h1>
      <p>我的项目开发与技术实践</p>
    </div>
  </section>

  <section class="portfolio-content">
    <div class="portfolio-grid">
      <div v-for="(item, i) in projectItems" :key="i" class="portfolio-item">
        <div class="portfolio-item-content">
          <h3 v-html="item.title"></h3>
          <p class="portfolio-item-desc">{{ item.desc }}</p>
          <div class="portfolio-item-tech">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="floating-buttons">
    <router-link to="/" class="back-to-home" title="返回首页">
      <i class="fas fa-home"></i>
      <span>返回首页</span>
    </router-link>
  </div>
</template>

<script setup>
import { projectItems } from '@/data/projects'
</script>