Page({
  // model
  /**
   * 页面的初始数据
   */
  data: {
    message: 'hi',
    news: [],
    page: 1,
    tab: 'share'
  },
  changeValue() {
    this.setData({
      message: 'Yao'
    })
  },
  loadMore({ type }) {
    var self = this
    console.log(wx)
    wx.request({
      data: {
        limit: 10,
        page: this.data.page,
        tab: this.data.tab
      },
      url: 'https://cnodejs.org/api/v1/topics',
      success(res) {
        wx.stopPullDownRefresh();
        console.log(res.data)
        self.setData({
          news: type === 'onReachBottom' ? [...self.data.news, ...res.data.data] : [...res.data.data, ...self.data.news]
        })
      }
    })
    this.setData({
      page: ++this.data.page
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore({
      type: 'onReachBottom'
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
    this.loadMore({
      type: 'onPullDownRefresh'
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore({
      type: 'onReachBottom'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})