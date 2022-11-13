<template>
  <div class="todo-footer">
    <label>
        <input type="checkbox" v-model="doneall">
    </label>
    <span>
        <span>已完成{{donetodos}}</span>/{{total}}
    </span>
    <button class="btn btn-danger">清楚已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos','checkall'],
    computed:{
        total(){
            return this.todos.length
        },
        donetodos(){
           return this.todos.reduce((pre,current)=>{
            return pre + (current.done ? 1 : 0)
            },0)
        },
        doneall:{
            get(){
                return this.donetodos === this.total && this.total>0
            },
            set(value){
                this.checkall = value
            }
        }
    }
}
</script>

<style scoped>
 .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
 }
 .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
 }
 .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
 }
 .todo-footer button{
    float:right;
    margin-top:-1px;
 }
</style>