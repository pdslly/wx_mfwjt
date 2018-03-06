const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTabIndex: 0,
    animationData: {},
    swipers: [{
      key: 1,
      color: 'red'
    }, {
      key: 2,
      color: 'blue'
    }, {
      key: 3,
      color: 'green'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var animate = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear'
    })
    this.animate = animate
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

  /**
   * 用户点击选择选项卡
   */
  bindSelNav: function (e) {
    let curInd = this.data.currentTabIndex
    let actInd = +e.target.dataset.index
    let ratio = app.globalData.rpxRatio
    if (curInd === actInd) return
    this.animate.translate(actInd * 250 * ratio).step()
    this.setData({
      currentTabIndex: actInd,
      animationData: this.animate.export()
    })
  },
  /**
   * 滑块视图切换
   */
  swipeChange: function (e) {
    let ind = e.detail.current
    let ratio = app.globalData.rpxRatio
    this.animate.translate(ind * 250 * ratio).step()
    this.setData({
      currentTabIndex: ind,
      animationData: this.animate.export()
    })
  }
})