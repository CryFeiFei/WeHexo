
import config from '../../utils/config.js'
var wxRequest = require('../../utils/wxRequest.js')
var urlPosts = config.getPosts

// var getTopHotPostsRequest = wxRequest.getRequest(Api.getTopHotPosts(tab));
// getTopHotPostsRequest.then(response =>{

const app = getApp();
Page({
  data: {
    isLoading: true, // 判断是否尚在加载中
    articallist: {}, // 内容数据
    praiseList: {}
  },

  postClick: function (option) {
    var self = this;
    var title =  option.target.dataset.title
    var path = option.target.dataset.path
    wx.navigateTo({
      url: '../artical/artical?path=' + path,
    })
  },

  onLoad: function() {
    var self = this;
    wx.request({
      url: urlPosts, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        var pl = {

        }
        for (var index = 0; index < res.data.length; index++){
          var articalInfo = res.data[index]
          console.log(articalInfo)
          console.log(articalInfo['title'])
          pl[index] = {
            title : articalInfo['title'], 
            path : articalInfo['path']
          }
        }

        self.setData({
          praiseList:pl
        })

      }
    }),    
    // var getPostsRequest = wxRequest.getRequest(urlPosts);
    // getPostsRequest.then(response => {
    //   var dataTest = response.data;
    //   if (response.data.status == '200' ){
    //     var res = response.data;
    //     self.setData({
    //       displaySwiper: "block"
    //     });
    //   } else {
    //     self.setData({
    //     });
    //   }
    // }).catch(function (response) {
    //   console.log(response);
    //   self.setData({
    //   });
    // }).finally(function () { });
    

    self.setData({
      articallist: [1,2,3],
      isLoading: false
    })
  }
})