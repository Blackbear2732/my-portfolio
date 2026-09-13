<template>
  <section class="page-header">
    <div class="header-content">
      <i class="fas fa-award"></i>
      <h1>个人成就</h1>
      <p>我的荣誉证书与成长历程</p>
    </div>
  </section>

  <section class="portfolio-content">
    <div class="portfolio-grid">
      <div v-for="(item, i) in portfolioItems" :key="i" class="portfolio-item">
        <div class="portfolio-item-content">
          <span class="portfolio-category">{{ item.category }}</span>
          <h3 v-html="item.title"></h3>
          <p class="portfolio-item-desc">{{ item.desc }}</p>
          <div class="portfolio-item-tech">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
          <a
              v-if="item.certificate"
              href="#"
              class="portfolio-item-link"
              @click.prevent="openCert(item.certificate)"
          >查看证明</a>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="certVisible" class="certificate-viewer" style="display:flex" @click.self="certVisible = false">
      <span class="close-certificate" @click="certVisible = false">&times;</span>
      <img :src="asset(certSrc)" alt="证明"/>
    </div>
  </Teleport>
</template>

<script setup>
import {ref} from 'vue'
import {portfolioItems} from '@/data/portfolio'
import {asset} from '@/utils/asset'

const certVisible = ref(false)
const certSrc = ref('')

function openCert(src) {
  certSrc.value = src
  certVisible.value = true
}
</script>