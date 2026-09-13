import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/life', name: 'life', component: () => import('@/views/LifeView.vue') },
  { path: '/portfolio', name: 'portfolio', component: () => import('@/views/PortfolioView.vue') },
  { path: '/projects', name: 'projects', component: () => import('@/views/ProjectsView.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})