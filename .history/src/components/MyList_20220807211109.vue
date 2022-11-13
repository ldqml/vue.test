<template>
  <div>
    <ul class="todo-main">
        <li>
            <label>
                <input type="checkbox">
                <span>xxxxx</span>
            </label>
            <button class="btn btn-danger" style="display: none">删除</button>
        </li>
        <li>
            <label>
                <input type="checkbox">
                <span>yyyyy</span>
            </label>
            <button class="btn btn-danger" style="display: none">删除</button>
        </li>
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