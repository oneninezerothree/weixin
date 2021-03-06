// model
Page({
  data: {
    message: 'Hello World',
    news: [],
    bool: true,
    page: 1
  },
  changeValue() {
    this.setData({
      message: 'hi'
    })
  },
  onLoad: function(options) {
    this.loadMore({
      type: 'onPullDownRefresh'
    })
  },
  onPullDownRefresh: function() {
    this.loadMore({
      type: 'onPullDownRefresh'
    })
  },
  onReachBottom: function() {
    this.loadMore({
      type: 'onReachBottom'
    })
  },
  loadMore({
    type
  }) {
    wx.showLoading();
    wx.showNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: '正在加载中...'
    });
    var self = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics', //仅为示例，并非真实的接口地址
      data: {
        page: self.data.page, //Number 页数
        tab: 'share', //String 主题分类。目前有 ask share job good
        limit: 10 //Number 每一页的主题数量
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.setNavigationBarTitle({
          title: 'QQ音乐'
        });
        wx.hideNavigationBarLoading();
        wx.hideLoading();
        console.log(res.data)
        wx.stopPullDownRefresh()
        self.setData({
          news: type === 'onPullDownRefresh' ? [...res.data.data, ...self.data.news] : [...self.data.news, ...res.data.data],
          page: ++self.data.page
        })
      }
    })
  },
  // 跳转详情页
  toDetailPage(id){
    console.log(id)
  }
})