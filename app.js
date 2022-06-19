// app.js
import ENV from './utils/dev'
App({
  onLaunch() {
    this.getSystemInfo()
  },
  globalData: {
    systemInfo: {} // 登陆设备信息
  },
  onShow() {

  },
  // 获取设备信息，并且附值一个导航信息的独对象
  getSystemInfo() {
    const systemInfo = wx.getSystemInfoSync()
    const ztlHeight = systemInfo.statusBarHeight
    // 微信胶囊的位置信息
    const res = wx.getMenuButtonBoundingClientRect()
    const dhlHeight = (res.top - ztlHeight) * 2 + res.height
    const zHeight = dhlHeight + ztlHeight
    systemInfo.tabbarInfo = {
      zHeight,
      dhlHeight,
      ztlHeight
    }
    // 附值获取到的设备参数 + 设配机型的顶部属性
    this.globalData.systemInfo = systemInfo
  },
  // 封装跳转h5方法
  gotoH5page(val) {
    if (val) {
      wx.navigateTo({
        url: `/pages/external/app_h5/app_h5?router=${val}`,
      })
    } else {
      wx.showToast({
        title: '错误的路径，示例 /about',
        icon: 'none',
        duration: 2000
      })
    }
  },

})
