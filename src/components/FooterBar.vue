<template>
  <footer class="social-links">
    <div class="social-icons">
      <a :href="`mailto:${site.email}`" class="social-icon" title="邮箱">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="#" class="social-icon" title="电话" @click.prevent="uiActions.openPhone()">
        <i class="fas fa-phone"></i>
      </a>
      <a href="#" class="social-icon" title="微信" @click.prevent="uiActions.openWechat()">
        <i class="fab fa-weixin"></i>
      </a>
      <a href="#" class="social-icon" title="QQ" @click.prevent="uiActions.openQq()">
        <i class="fab fa-qq"></i>
      </a>
      <a :href="site.douyin" class="social-icon" title="抖音" target="_blank" rel="noopener">
        <i class="fab fa-tiktok"></i>
      </a>
      <a :href="site.bilibili" class="social-icon" title="哔哩哔哩" target="_blank">
        <i class="fab fa-bilibili"></i>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { site } from '@/data/site'
import { uiActions } from '@/store/ui'
</script>