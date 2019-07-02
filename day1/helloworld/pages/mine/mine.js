const store = require('../../utils/store.js')
console.log(store)
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
   onLoad: function (options) {
     console.log(store.getState())
    //  store.dispatch({
    //    type:'GETNAME'
    //  })
  },
  navigateDetail(){
    // wx.navigateTo({
    //   url: '../detail/detail'
    // })
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })
    // wx.getLocation({
    //   type: 'wgs84',
    //   success(res) {
    //     console.log(res)
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //   }
    // })
    wx.makePhoneCall({
      phoneNumber: '13929559054'
    })
    // wx.showNavigationBarLoading();
    // wx.setNavigationBarTitle({
    //   title: '老姚'
    // });
    // wx.showLoading()
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
  }
})