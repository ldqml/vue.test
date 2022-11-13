<template>
  <div id="root">
    <div class="container">
       <cote-gory></cote-gory>
       <cote-gory></cote-gory>
       <cote-gory></cote-gory>
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
</style>