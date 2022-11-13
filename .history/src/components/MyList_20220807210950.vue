<template>
  <div>
    <ul class="todo-main">
        <li>
            <label>
                <input type="checkbox">
                <span>xxxxx</span>
            </label>
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