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

</style>