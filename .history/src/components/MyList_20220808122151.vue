<template>
  <div>
    <ul class="todo-main">
        <my-item v-for="todoobj in todos" :key="todoobj.id" :todo='todoobj' :checktodo='checktodo' :deletetodo='deletetodo'></my-item>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:'MyList',
    components:{
        MyItem
    },
    props:['todos','checktodo','deletetodo']
}
</script>

<style scoped>
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
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
 }
</style>