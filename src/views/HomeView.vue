<template>
  <section class="profile-section">
    <div class="profile-container">
      <div class="profile-avatar">
        <img :src="asset(site.avatar)" alt="张钧益的头像" />
      </div>
      <div class="profile-info">
        <h1>张钧益</h1>
        <p class="profile-title">软件工程师/摄影爱好者</p>
        <div class="profile-description">
          <p>你好！我是张钧益，一名充满热情的软件工程师。</p>
          <p>我热爱编程和摄影，喜欢用代码构建美好的数字世界，用镜头记录精彩的瞬间。</p>
          <p>在这里，你可以了解我的项目经历、生活记录和创作作品。</p>
        </div>
      </div>
      <div class="scroll-hint">
        <p>向下滚动查看更多</p>
        <i class="fas fa-chevron-down bounce"></i>
      </div>
    </div>
  </section>

  <!-- 轮播图 -->
  <div class="carousel">
    <div class="carousel-container">
      <button class="carousel-button prev" @click="prevSlide">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div
        v-for="(img, i) in carouselImages"
        :key="i"
        class="carousel-slide"
        :class="{ active: i === currentSlide }"
      >
        <img :src="asset(img)" :alt="`照片${i + 1}`" />
      </div>
      <button class="carousel-button next" @click="nextSlide">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <!-- 三大卡片 -->
  <div class="showcase-section">
    <div class="showcase-container">
      <div class="showcase-card">
        <div class="card-header">
          <i class="fas fa-camera"></i>
          <h2>生活记录</h2>
        </div>
        <div class="card-content">
          <p>里面记录我的日常生活、旅行见闻和有趣的瞬间。通过镜头分享我眼中的世界。</p>
          <router-link to="/life" class="card-button">查看更多</router-link>
        </div>
      </div>
      <div class="showcase-card">
        <div class="card-header">
          <i class="fas fa-award"></i>
          <h2>个人成就</h2>
        </div>
        <div class="card-content">
          <p>这里展示我的荣誉证书与成长历程。记录我的点点滴滴。</p>
          <br />
          <router-link to="/portfolio" class="card-button">查看更多</router-link>
        </div>
      </div>
      <div class="showcase-card">
        <div class="card-header">
          <i class="fas fa-laptop-code"></i>
          <h2>项目展示</h2>
        </div>
        <div class="card-content">
          <p>展示我参与开发的项目和技术实践。分享我的编程历程。</p>
          <br />
          <router-link to="/projects" class="card-button">查看更多</router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- 服务区 -->
  <div class="services-section">
    <div class="services-container">
      <div class="services-header">
        <i class="fas fa-star"></i>
        <h2>专业技术服务</h2>
        <p>为您提供全方位的电脑技术支持与视频制作服务</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <i class="fas fa-desktop"></i>
          <h3>系统维护</h3>
          <p>提供专业的电脑系统重装和优化服务，解决系统卡顿问题，让您的电脑运行更快速流畅。</p>
        </div>
        <div class="service-card">
          <i class="fas fa-tools"></i>
          <h3>软件安装</h3>
          <p>专业安装各类软件，包括 Adobe 全家桶等专业软件，确保安装稳定可靠，完美运行。</p>
        </div>
        <div class="service-card">
          <i class="fas fa-video"></i>
          <h3>视频剪辑</h3>
          <p>熟练使用 Premiere Pro、Final Cut Pro 等专业软件，提供创意视频剪辑、特效制作、转场设计等服务。</p>
        </div>
        <div class="service-card">
          <i class="fas fa-headphones"></i>
          <h3>音频处理</h3>
          <p>为视频添加合适的音乐和音效，调整音频效果，提升作品的整体感染力。</p>
        </div>
      </div>
      <div class="contact-price">
        <button class="price-button" @click="uiActions.openPrice()">
          <i class="fas fa-comment-dollar"></i>
          获取报价
        </button>
        <p>点击联系我，了解详细服务内容和价格</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { site } from '@/data/site'
import { asset } from '@/utils/asset'
import { uiActions } from '@/store/ui'

const carouselImages = [
  'image/carousel/carousel-01.jpg',
  'image/carousel/carousel-02.jpg',
  'image/carousel/carousel-03.jpg',
  'image/carousel/carousel-04.jpg',
  'image/carousel/carousel-05.jpg',
  'image/carousel/carousel-06.jpg',
  'image/carousel/carousel-07.jpg'
]

const currentSlide = ref(0)
let timer = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length
}
function startAuto() {
  timer = setInterval(nextSlide, 5000)
}

onMounted(startAuto)
onUnmounted(() => clearInterval(timer))
</script>