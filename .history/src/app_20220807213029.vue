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
 body{
    background-color: #fff;
 }
 .btn{
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0,0,0,0.5);
 }
</style>