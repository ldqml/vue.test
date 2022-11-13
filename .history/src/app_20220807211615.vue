<template>
  <div id="root">
    <div class="todo-container">
        <div class="todo-wrap">
            <my-header></my-header>
            <my-list></my-list>
            <my-footer></my-footer>
        </div>
    </div>
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