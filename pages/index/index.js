// 获取应用实例
const app = getApp()
Page({
  data: {

  },

  onLoad() {

  },
  onShow() {
    // 修改自定义tabbar选中状态
    this.getTabBar().setData({ active: 0 })
  },

  // 跳转到h5页面
  gotoPage() {
    app.gotoH5page('/about')
  }
})
