// model
Page({
  data: {
    message: 'Hello World',
    news: [{
      title: '国内第一条新闻',
      author: 'Eno'
    }, {
      title: '国外第二条新闻',
      author: 'Lin'
    }],
    bool: true
  },
  changeValue(){
    this.setData({
      message: 'hi'
    })
  }
})