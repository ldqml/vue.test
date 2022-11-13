<template>
  <div id="root">
    <div class="todo-container">
        <div class="todo-wrap">
            <my-header @receive="receive"></my-header>
            <my-list :todos="todos"></my-list>
            <my-footer :todos='todos' @checkall='checkall' @clearallltodo='clearallltodo'></my-footer>
        </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'
export default {
    name:'App',
    data(){
        return{
        todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    }, 
    components:{
        MyHeader,
        MyList,
        MyFooter
    },
    methods:{
        receive(addobj){
            this.todos.unshift(addobj);
        },
        checktodo(id){
            this.todos.forEach((todo) => {
                if(todo.id===id) todo.done = !todo.done
            });
        },
        deletetodo(_,id){
            this.todos = this.todos.filter(todo=> todo.id !==id )
        },
        checkall(done){
            this.todos.forEach((todo) => {
                todo.done =done
            })
        },
        clearallltodo(){
            this.todos = this.todos.filter(alltodo=>alltodo.done === false)
        }
    },
    watch:{
        deep: true,
        todos:{
            handler(value){
            localStorage.setItem('todos',JSON.stringify(value))
        }
    },
  },
    mounted() {
        this.$bus.$on('checktodo',this.checktodo)
        this.pubid = pubsub.subscribe('deletetodo',this.deletetodo)
    },
    beforeDestroy() {
        this.$bus.$off('checktodo')
        pubsub.unsubscribe(this.pubid)
    },
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
 .btn-danger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
 }
  .btn-edit{
    color: #fff;
    background-color:aqua;
    border: 1px solid skyblue;
 }
 .btn-danger:hover{
    color: #fff;
    background-color: #bd362f;
 }
 .btn-focus{
    outline: none;
 }
 .todo-container{
    width: 600px;
    margin: 0 auto;
 }
 .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
 }
</style>