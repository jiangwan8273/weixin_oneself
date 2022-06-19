const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 标题
    title: {
      type: String,
      value: ''
    },
    // 是否显示搜索框
    search: {
      type: Boolean,
      value: false
    },
    // 输入框限制类型，number数字类型，num带有小数点的数字，
    searchType: {
      type: String,
      value: 'text'
    },
    value: '', // 搜索框的值
    val: ''
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 适配不同机型制作的兼容
    zHeight: app.globalData.systemInfo.tabbarInfo.zHeight,
    ztlHeight: app.globalData.systemInfo.tabbarInfo.ztlHeight,
    dhlHeight: app.globalData.systemInfo.tabbarInfo.dhlHeight,
  },

  attached() {
    const pages = getCurrentPages()
    const curr = pages[pages.length - 1]
    this.setData({
      curr
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回事件
    backout() {
      wx.navigateBack({
        delta: 1,
      })
    },
    // input值发生改变
    inputchange(e) {
      let val = e.detail.value
      let check = ''
      let type = this.data.searchType
      // 根据类型做限制
      if (type == 'number') {
        check = /[^\d]/g
      }
      val = val.replace(check, '')
      this.setData({
        val
      })
      // 附值给父元素
      this.triggerEvent('changeInput', val)
    }
  }
})