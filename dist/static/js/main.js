// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})

// 微信自动播放音乐
document.addEventListener("WeixinJSBridgeReady", function () {
  owo.script.playMusic.play()
}, false)