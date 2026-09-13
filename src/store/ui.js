import { reactive } from 'vue'

export const uiState = reactive({
  wechatVisible: false,
  qqVisible: false,
  phoneVisible: false,
  priceVisible: false,
  imageViewer: { visible: false, items: [], index: 0 }
})

export const uiActions = {
  openWechat() { uiState.wechatVisible = true },
  closeWechat() { uiState.wechatVisible = false },
  openQq() { uiState.qqVisible = true },
  closeQq() { uiState.qqVisible = false },
  openPhone() { uiState.phoneVisible = true },
  closePhone() { uiState.phoneVisible = false },
  openPrice() { uiState.priceVisible = true },
  closePrice() { uiState.priceVisible = false },
  openImageViewer(items, index = 0) {
    uiState.imageViewer.items = items
    uiState.imageViewer.index = index
    uiState.imageViewer.visible = true
  },
  closeImageViewer() { uiState.imageViewer.visible = false },
  setImageIndex(i) { uiState.imageViewer.index = i }
}