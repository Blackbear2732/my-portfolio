const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')

module.exports = defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 80,
    host: '0.0.0.0',  // 允许局域网访问，像若依那样显示 Network 地址
    open: false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})