// pages/external/app_h5/app_h5.js
import ENV from '../../../utils/dev'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    router: '/index' // 跳转到路由地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const pages = getCurrentPages()
    const curr = pages[pages.length - 1]
    this.setRouter(curr.options)
  },

  setRouter(val) {
    this.setData({
      router: val.router,
      src: `${ENV.webURL}${val.router}`
    })
    console.log('H5跳转路径-------------',this.data.src);
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})