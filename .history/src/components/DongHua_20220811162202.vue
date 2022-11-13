<template>
  <div class="nei">
    <button @click="isshow = !isshow">显示隐藏</button>
    <h1 v-show="isshow">{{neirong}}</h1>
  </div>
</template>

<script>
export default {
    name:'DongHua',
    data(){
      return {
        neirong:'哈哈哈哈哈哈哈',
        isshow: true
      }
    }
}
</script>

<style>
h1 {
    background-color: aqua;
}
</style>