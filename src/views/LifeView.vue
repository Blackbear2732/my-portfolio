<template>
  <section class="page-header">
    <div class="header-content">
      <i class="fas fa-camera"></i>
      <h1>生活记录</h1>
      <p>记录生活中的美好瞬间</p>
    </div>
  </section>

  <section class="life-content">
    <template v-for="section in lifeSections" :key="section.id">
      <div class="life-category" :id="section.id">
        <h2>{{ section.title }}</h2>
        <p>{{ section.subtitle }}</p>
      </div>

      <div v-if="section.items" class="life-grid">
        <div v-for="(item, i) in section.items" :key="i" class="life-item">
          <img :src="asset(item.src)" :alt="item.title" @click="openImage(item)" />
          <div class="life-item-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.date }}</p>
            <p class="description">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <template v-if="section.subSections">
        <template v-for="(sub, si) in section.subSections" :key="si">
          <div class="life-subcategory" :id="sub.id">
            <h3>{{ sub.title }}</h3>
            <p>{{ sub.date }}</p>
          </div>
          <div class="life-grid">
            <div v-for="(item, i) in sub.items" :key="i" class="life-item">
              <img :src="asset(item.src)" :alt="item.title" @click="openImage(item)" />
              <div class="life-item-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.date }}</p>
                <p class="description">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </template>
      </template>
    </template>
  </section>

  <div class="timeline-nav">
    <div
      v-for="section in lifeSections"
      :key="section.id"
      class="timeline-item"
      @click="scrollTo(section.id)"
    >
      <span class="timeline-date">{{ section.timeline.date }}</span>
      <span class="timeline-title">{{ section.timeline.title }}</span>
      <div v-if="section.timeline.children" class="timeline-subitems">
        <div
          v-for="child in section.timeline.children"
          :key="child.id"
          class="timeline-subitem"
          @click.stop="scrollTo(child.id)"
        >{{ child.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { lifeSections } from '@/data/life'
import { asset } from '@/utils/asset'
import { uiActions } from '@/store/ui'

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