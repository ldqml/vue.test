<template>
  <div class="rong">
    <button @click="isshows = !isshows">显示隐藏</button>
    <transition appear>
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
.v-enter {
    transform: translateX(-100%);
}
.v-leave {
    transform: translateX(0);
}
</style>