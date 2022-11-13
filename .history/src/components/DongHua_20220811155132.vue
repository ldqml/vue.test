<template>
  <div class="nei">
    <button>显示隐藏</button>
    <h1 v-show="isshow">{{neirong}}</h1>
  </div>
</template>

<script>
export default {
    name:'DongHua',
    data(){
      return {
        neirong:'哈哈哈哈哈哈哈'
      }
    }
}
</script>

<style>
h1 {
    background-color: aqua;
}
</style>