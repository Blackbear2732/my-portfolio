<template>

  <div class="page-life">

  <section class="page-header">
    <div class="header-content">
      <i class="fas fa-camera"></i>
      <h1>生活记录</h1>
      <p>记录生活中的美好瞬间</p>
    </div>
  </section>

    <section class="life-content">
      <div
          v-for="section in lifeSections"
          :key="section.id"
          class="life-section"
          :id="section.id"
      >
        <!-- 行程标题区 -->
        <header class="life-section-header">
          <h2>{{ section.title }}</h2>
          <p v-if="section.subtitle">{{ section.subtitle }}</p>
        </header>

        <!-- 无子章节：直接展示条目 -->
        <div v-if="section.items" class="life-photo-grid">
          <div
              v-for="(item, i) in section.items"
              :key="i"
              class="life-photo"
              :class="{ 'no-image': !item.src }"
              @click="item.src && openImage(item)"
          >
            <div v-if="item.src" class="life-photo-img">
              <img
                  :src="asset(item.src)"
                  :alt="item.title"
                  loading="lazy"
                  decoding="async"
              />
            </div>
            <div class="life-photo-caption">
              <h4>{{ item.title }}</h4>
              <p class="life-photo-date">{{ item.date }}</p>
              <p class="life-photo-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 有子章节 -->
        <div v-if="section.subSections" class="life-subsections">
          <div
              v-for="sub in section.subSections"
              :key="sub.id"
              class="life-subsection"
              :id="sub.id"
          >
            <header class="life-subsection-header">
              <h3>{{ sub.title }}</h3>
              <p v-if="sub.date">{{ sub.date }}</p>
            </header>
            <div class="life-photo-grid">
              <div
                  v-for="(item, i) in sub.items"
                  :key="i"
                  class="life-photo"
                  :class="{ 'no-image': !item.src }"
                  @click="item.src && openImage(item)"
              >
                <div v-if="item.src" class="life-photo-img">
                  <img
                      :src="asset(item.src)"
                      :alt="item.title"
                      loading="lazy"
                      decoding="async"
                  />
                </div>
                <div class="life-photo-caption">
                  <h4>{{ item.title }}</h4>
                  <p class="life-photo-date">{{ item.date }}</p>
                  <p class="life-photo-desc">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="timeline-nav">
      <div
          v-for="(sections, year) in timelineByYear"
          :key="year"
          class="timeline-year"
      >
        <div class="timeline-year-label" @click="toggleYear(year)">
          <span>{{ year }}</span>
          <i :class="activeYear === year ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </div>
        <div v-show="activeYear === year" class="timeline-year-items">
          <div
              v-for="item in sections"
              :key="item.id"
              class="timeline-item"
              @click="scrollTo(item.id)"
          >
            <span class="timeline-date">{{ item.month }}月</span>
            <span class="timeline-title">{{ item.title }}</span>
            <div v-if="item.children" class="timeline-subitems">
              <div
                  v-for="child in item.children"
                  :key="child.id"
                  class="timeline-subitem"
                  @click.stop="scrollTo(child.id)"
              >{{ child.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed,ref } from 'vue'
import { lifeSections } from '@/data/life'
import { asset } from '@/utils/asset'
import { uiActions } from '@/store/ui'


// 按年份聚合
const timelineByYear = computed(() => {
  const map = {}
  lifeSections.forEach((section) => {
    const year = section.timeline.date.split('.')[0]
    if (!map[year]) map[year] = []
    map[year].push({
      id: section.id,
      month: section.timeline.date.split('.')[1],
      title: section.timeline.title,
      children: section.timeline.children
    })
  })
  return map
})

const activeYear = ref(null)  // 当前展开的年份

function toggleYear(year) {
  activeYear.value = activeYear.value === year ? null : year
}




// 把所有照片拍平成一个数组，用于查看器左右切换
const allItems = computed(() => {
  const arr = []
  lifeSections.forEach((section) => {
    if (section.items) arr.push(...section.items)
    if (section.subSections) {
      section.subSections.forEach((sub) => arr.push(...sub.items))
    }
  })
  return arr
})

function openImage(item) {
  const index = allItems.value.findIndex((i) => i.src === item.src)
  uiActions.openImageViewer(allItems.value, index < 0 ? 0 : index)
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = document.querySelector('.navbar')?.offsetHeight || 50
  const top = el.getBoundingClientRect().top + window.pageYOffset - navH
  window.scrollTo({ top, behavior: 'smooth' })
}
</script>