// app.js
import ENV from './utils/dev'
App({
  onLaunch() {
  },
  globalData: {
    userInfo: null
  },
  onShow() {

  },
  // 封装跳转h5方法
  gotoH5page(val) {
    if (val) {
      wx.navigateTo({
        url: `/pages/external/app_h5/app_h5?router=${val}`,
      })
    }
  },

})
