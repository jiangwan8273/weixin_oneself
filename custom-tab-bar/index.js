// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "home-o",
    }, {
      "pagePath": "/pages/order/order",
      "text": "订单",
      "iconPath": "search",
    }, {
      "pagePath": "/pages/home/home",
      "text": "家",
      "iconPath": "setting-o",
    }, {
      "pagePath": "/pages/mine/mine",
      "text": "我的",
      "iconPath": "friends-o",
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      let url = event.currentTarget.dataset.item.pagePath
      wx.switchTab({
        url
      })
    },
  }
})
