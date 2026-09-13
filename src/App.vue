<template>
  <NavBar />
  <router-view />
  <FooterBar />
  <BackToTop />
  <ImageViewer />
  <QrModal />
  <QqModal />
  <PhoneModal />
  <PriceModal />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import BackToTop from '@/components/BackToTop.vue'
import ImageViewer from '@/components/ImageViewer.vue'
import QrModal from '@/components/QrModal.vue'
import QqModal from '@/components/QqModal.vue'
import PhoneModal from '@/components/PhoneModal.vue'
import PriceModal from '@/components/PriceModal.vue'
</script>