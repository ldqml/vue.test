<template>
  <div>
    <ul class="todo-main">
        <my-item></my-item>
        <my-item></my-item>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{
        MyItem
    }
}
</script>

<style>
 .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
 }
 .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
 }
</style>