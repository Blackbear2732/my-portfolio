<template>
  <div class="page-home">

  <section class="profile-section">
    <div class="profile-container">
      <div class="profile-avatar">
        <img :src="asset(site.avatar)" alt="张钧益的头像" />
      </div>
      <div class="profile-info">
        <h1>张钧益</h1>
        <p class="profile-title">软件工程师/摄影爱好者</p>
        <div class="profile-badge">
          <span><i class="fas fa-graduation-cap"></i> 山西农业大学 · 软件工程</span>
          <span><i class="fas fa-star"></i> 中共预备党员</span>
          <span><i class="fas fa-map-marker-alt"></i> 山西 · 运城</span>
        </div>
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

<!--  &lt;!&ndash; 服务区 &ndash;&gt;     服务区代码伪删除-->
<!--  <div class="services-section">-->
<!--    <div class="services-container">-->
<!--      <div class="services-header">-->
<!--        <i class="fas fa-star"></i>-->
<!--        <h2>专业技术服务</h2>-->
<!--        <p>为您提供全方位的电脑技术支持与视频制作服务</p>-->
<!--      </div>-->
<!--      <div class="services-grid">-->
<!--        <div class="service-card">-->
<!--          <i class="fas fa-desktop"></i>-->
<!--          <h3>系统维护</h3>-->
<!--          <p>提供专业的电脑系统重装和优化服务，解决系统卡顿问题，让您的电脑运行更快速流畅。</p>-->
<!--        </div>-->
<!--        <div class="service-card">-->
<!--          <i class="fas fa-tools"></i>-->
<!--          <h3>软件安装</h3>-->
<!--          <p>专业安装各类软件，包括 Adobe 全家桶等专业软件，确保安装稳定可靠，完美运行。</p>-->
<!--        </div>-->
<!--        <div class="service-card">-->
<!--          <i class="fas fa-video"></i>-->
<!--          <h3>视频剪辑</h3>-->
<!--          <p>熟练使用 Premiere Pro、Final Cut Pro 等专业软件，提供创意视频剪辑、特效制作、转场设计等服务。</p>-->
<!--        </div>-->
<!--        <div class="service-card">-->
<!--          <i class="fas fa-headphones"></i>-->
<!--          <h3>音频处理</h3>-->
<!--          <p>为视频添加合适的音乐和音效，调整音频效果，提升作品的整体感染力。</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="contact-price">-->
<!--        <button class="price-button" @click="uiActions.openPrice()">-->
<!--          <i class="fas fa-comment-dollar"></i>-->
<!--          获取报价-->
<!--        </button>-->
<!--        <p>点击联系我，了解详细服务内容和价格</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <!-- 技能栈 -->
  <div class="skills-section">
    <div class="skills-container">
      <div class="skills-header">
        <i class="fas fa-code"></i>
        <h2>技能栈</h2>
        <p>我在学习和工作中积累的技术与工具</p>
      </div>
      <div class="skills-grid">
        <div v-for="group in skills" :key="group.group" class="skill-card">
          <h3>{{ group.group }}</h3>
          <div class="skill-tags">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 个人优势 -->
  <div class="strengths-section">
    <div class="strengths-container">
      <div class="strengths-header">
        <i class="fas fa-user-tie"></i>
        <h2>个人优势</h2>
        <p>在学生工作与专业学习中沉淀的核心能力</p>
      </div>
      <div class="strengths-grid">
        <div class="strength-card">
          <i class="fas fa-users-cog"></i>
          <h3>统筹协调能力</h3>
          <p>长期担任百余人学生组织负责人，分管 6 个部门、直接管理 18 名部长，善于团队管理、任务调度与多部门协作。</p>
        </div>
        <div class="strength-card">
          <i class="fas fa-clipboard-list"></i>
          <h3>制度与规范意识</h3>
          <p>主导建立工作流程、台账与素材归档规范，注重工作留痕与资料安全，契合机关档案管理与资料规范化要求。</p>
        </div>
        <div class="strength-card">
          <i class="fas fa-shield-alt"></i>
          <h3>信息化与安全意识</h3>
          <p>具备信息化工具应用能力，能用数字化手段辅助资料管理、权限管控与数据隔离，注重信息安全与保密。</p>
        </div>
        <div class="strength-card">
          <i class="fas fa-pen-fancy"></i>
          <h3>文字表达功底</h3>
          <p>经新闻宣传队伍培训，承担项目文档撰写与宣传材料审核等工作，文字表达严谨规范。</p>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { site,skills } from '@/data/site'
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