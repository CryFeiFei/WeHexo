const app = getApp();
Page({
  data: {
    isLoading: true, // 判断是否尚在加载中
    article: {} // 内容数据
  },
  onLoad: function() {
    var self = this
    wx.request({
      url: 'https://cryfeifei.top/api/articles/Qt释放线程资源的一些工程上的方法.json', //仅为示例，并非真实的接口地址
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
          base: 'https://cryfeifei.top',
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
    // wx.getFileSystemManager().readFile({  //读取文件
    //   filePath:  '/1.html',
    //   encoding: 'utf-8',
    //   success: res => {
    //     console.log(res.data)

    //     let result = app.towxml(res.data, 'html', {
    //       base: 'https://xxx.com',				// 相对资源的base路径
    //       theme: 'dark',					// 主题，默认`light`
    //       events: {					// 为元素绑定的事件方法
    //         tap: (e) => {
    //           console.log('tap', e);
    //         }
    //       }
    //     });

    //     // 更新解析数据
    //     this.setData({
    //       article: result,
    //       isLoading: false
    //     });


    //   },
    //   fail: console.error
    // })

  }
})