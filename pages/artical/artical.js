// pages/artical/artical.js
const app = getApp();

import config from '../../utils/config.js'

var URL = config.getUrl

var BaseUrl = config.getBaseUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  // onShareAppMessage: function (res) {
  //   if (res.from === 'button') {
  //     // 来自页面内转发按钮
  //     console.log(res.target)
  //   }
  //   return {
  //     title: '自定义转发标题',
  //     path: '/page/user?id=123'
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    var path = options.path
    console.log(path)
    wx.request({
      url: URL + path, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        //console.log(res.data)
        let content = res.data['content']
        console.log(content)

        let result = app.towxml(content, 'html', {
          // 相对资源的base路径
          base: BaseUrl,
          theme: 'light', // 主题，默认`light`
        });

        console.log(result)

        // 更新解析数据
        self.setData({
          article: result,
          isLoading: false
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //shareTimeline 分享到朋友圈
  onShareTimeline : function () {

  }
})