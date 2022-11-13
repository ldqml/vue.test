<template>
  <div id="root">
    <div class="container">
       <cote-gory title="美食">
        <img slot="center" src="./assets/logo.png" alt="">
        <a href="" slot="bottom">更多精彩</a>
       </cote-gory>
       <cote-gory title="运动">
        <ul slot="center">
          <li v-for="(g,index) in sport" :key="index">{{g}}</li>
        </ul>
        <div slot="bottom"> class="footer">
          <a  href="">单机游戏</a>
          <a  href="">网络游戏</a>
        </div>
       </cote-gory>
       <cote-gory title="数字">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
       </cote-gory>
    </div>
  </div>
</template>

<script>
import CoteGory from "./components/CoteGory"
export default {
    name:'App',
    data(){
      return{
        foods:['火锅','烤肉','牛排','沙县'],
        sport:['唱','跳','rap','篮球'],
        move:['111','222','333','444']
      }
    },
    components:{CoteGory}
}
</script>
<style>
.container{
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>