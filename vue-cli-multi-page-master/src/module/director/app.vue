<template>
  <div>
    <div class="wrap">
      <div class="play clearfix">
        <div class="fl">
          <div class="title">
            当前画面：
          </div>
          <div class="player">
            <video src="/i/movie.ogg" controls="controls" width="508" height="316">
            your browser does not support the video tag
            </video>
          </div>
        </div>
        <div class="pattern fr">
          <div class="title">
            画面模式：
          </div>
          <ul class="patternlist">
            <li><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""><h4>单屏播放</h4></a></li>
            <li><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""><h4>1:1分屏播放</h4></a></li>
            <li><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""><h4>画中画播放</h4></a></li>
            <li><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""><h4>4屏播放</h4></a></li>
            <li><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""><h4>1:3分屏播放</h4></a></li>
            <li><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""><h4>3屏播放</h4></a></li>
          </ul>
        </div>
      </div>
      <div class="signal">
        <div class="title">视频</div>
        <ul class="signals clearfix">
          <li><h4>信号源1</h4><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""></a></li>
          <li><h4>信号源2</h4><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""></a></li>
          <li><h4>信号源3</h4><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""></a></li>
          <li><h4>信号源4</h4><a><img src="http://images.gaga.me/photos2/2018/0108/5a52ee9ee6457.jpg" alt=""></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Lib from 'assets/Lib.js'
Lib.Vue.use(Lib.Resource);
export default {
  data() {
    return {}
  },
  components: {
  },
  ready(){
    this.getData()
  },
  methods: {
    getData (){
    }
  }  
}
</script>

<style scoped>
.player{width:508px;height: 316px;}
.pattern{width: 510px;}
.patternlist li{float:left;width: 156px;height: 166px;line-height: 20px;text-align: center;margin-right: 21px;}
.patternlist li:nth-child(3n){margin-right: 0;}
.patternlist li img{height: 108px;width: 156px;display: block;}
.patternlist li h4{line-height: 50px;font-size: 18px;}
.signal{margin-top: 20px;}
.signal .title{background: #0460cf;color:#fff;width: 150px;height: 60px;text-align: center;line-height: 60px;}
.signals li{float:left;width: 240px;height: 200px;margin-right: 48px;}
.signals li:nth-child(4n){margin-right: 0;}
.signals li h4{line-height: 40px;font-size: 18px;}
.signals li img{height: 150px;width:240px;}
</style>





