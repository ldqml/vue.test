<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入待办项目">
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    name:'App',
    components:{
        MyHeader,
        MyList,
        MyFooter
    }
}
</script>

<style>

</style>