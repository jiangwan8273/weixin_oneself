// sonone/pages/keyboard/keyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: ['', '', '', '', ''],
    seleteNum: null,
    numlist: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
    ],
    letterlist: [
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'z',
      'c',
      'v',
      'b',
      'n',
      'm'
    ],
    textlist: [
      '京', '津', '沪', '渝', '冀', '豫', '云', '辽', '黑', '湘', '皖', '鲁', '新', '苏', '浙', '赣', '鄂', '桂', '甘', '晋', '蒙', '陕', '吉', '闽', '贵', '粤', '青', '藏', '川', '宁', '琼',
    ]
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

  },

  // 展开自定义键盘
  onShowkeyboard(e) {
    this.setData({
      show: true,
      seleteNum: e.currentTarget.dataset.index
    })
  },

  // 输入车牌号码
  changeVal(v) {
    console.log(v.currentTarget.dataset.item);
    let a = "inputVal[" + this.data.seleteNum + "]"
    let val = v.currentTarget.dataset.item
    this.setData({
      [a]: val,
      show:false
    })
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