<template>
  <div class="nei">
    <button @click="isshow = !isshow">显示隐藏</button>
    <transition appear>
      <h1 v-show="isshow">{{neirong}}</h1>
    </transition>
    <button @click="isshow = !isshow">显示隐藏</button>
    <transition appear>
      <h1 v-show="isshow">{{neirong}}</h1>
    </transition>
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
.v-enter-active {
  animation: dong 1s linear;
}
.v-leave-active {
  animation: dong 1s linear reverse;
}
@keyframes dong{
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }
}
</style>