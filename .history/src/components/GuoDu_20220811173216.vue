<template>
  <div class="rong">
    <button @click="isshows = !isshows">显示隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isshows">{{neirong}}</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'GuoDo',
    data(){
      return {
        neirong:'哈哈哈哈哈哈哈',
        isshows: true
      }
    }
}
</script>

<style>
h1 {
    background-color: aqua;
}
.hello-enter,.hello-leave-to{
    transform: translateX(-100%);
}
.hello-enter-active,.hello-leave-active{
    transform: 1s linear;
}
.hello-enter-to,.hello-leave {
    transform: translateX(0);
}
</style>