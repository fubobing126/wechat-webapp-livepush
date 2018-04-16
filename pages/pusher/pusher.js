Page({
  data : {
    src: '',
    name: '直播推流1',
    mode:'RTC',
    modeShow:'mode-hide',
    modeTitle:'标清',
    playSrc:'../img/play1.png',
    playStart:'mode-show',
    playStop: 'mode-hide',
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  onload: function(option){
    console.log('---',option)
  },
  onReady: function (e) {
    // 使用 wx.createLivePusherContext 获取 live-pusher 上下文 LivePusherContext 
    this.livePusherCtx = wx.createLivePusherContext('myLive')
    // this.livePusherCtx.setSrc('rtmp://video-center.alivecdn.com/live/c1536390ef7ee000ebb5d20b8c804648?vhost=stream1.niusee.cn')
    this.livePusherCtx.start()
  },
  liveStart: function () {
    this.setData({
      src: 'rtmp://video-center.alivecdn.com/live/c1536390ef7ee000ebb5d20b8c804648?vhost=stream1.niusee.cn',
      name: '直播推流2',
      playStart: 'mode-hide',
      playStop: 'mode-show',
    })
    this.livePusherCtx.start()
  },
  liveStop: function () {
    this.livePusherCtx.stop();
    this.setData({
      playStart: 'mode-show',
      playStop: 'mode-hide',
    })
  },
  livePause: function () {
    this.livePusherCtx.pause()
  },
  liveResume: function () {
    this.livePusherCtx.resume()
  },
  liveSwitchCamera: function () {
    this.livePusherCtx.switchCamera()
  },
  liveSnapshot: function () {
    this.livePusherCtx.snapshot()
  },
  modeSD: function () {
    console.log('标清')
    this.setData({
      mode:'SD',
      modeTitle: '标清'
    })
  },
  modeHD: function () {
    this.setData({
      mode: 'HD',
      modeTitle: '高清'
    })
  },
  modeFHD: function () {
    this.setData({
      mode: 'FHD',
      modeTitle: '超清'
    })
  },
  modeRTC: function () {
    this.setData({
      mode: 'RTC',
      modeTitle: '自动'
    })
  }, 
  switchoverMode: function() {
    this.setData({
      modeShow: 'mode-show'
    })
  },
  selectMode: function(e) {
    console.log('----',e.detail)
    this.setData({
      modeShow:'mode-hide'
    })
  }
})