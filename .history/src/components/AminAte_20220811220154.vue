<template>
  <div class="nei">
    <button @click="isshow = !isshow">显示隐藏</button>
    <transition appear>
      <h1 v-show="isshow">{{neirong}}</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'AminAte',
    data(){
      return {
        neirong:'哈哈哈哈哈哈哈',
        isshow: true
      }
    }
}
</script>

<style scoped>
h1 {
    background-color: aqua;
}
</style>