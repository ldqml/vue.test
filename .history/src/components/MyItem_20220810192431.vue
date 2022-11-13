<template>
  <div>
    <li deletetodo='deletetodo'>
        <label>
            <input type="checkbox" :checked='todo.done' @click="change(todo.id)">
            <span v-show="todo.edit">{{todo.title}}</span>
            <input v-show="todo.edit"> type="text">
        </label>
        <button class="btn btn-danger" @click="removetodo(todo.id)">删除</button>
        <button class="btn btn-edit" @click="edittodo(todo)">编辑</button>
        </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    name:'MyItem',
    props:['todo'],
    methods:{
        change(id){
            this.$bus.$emit('checktodo',id)
        },
        removetodo(id){
            if(confirm('确定删除吗？')){
                pubsub.publish('deletetodo',id)
            }
        },
        edittodo(todo){
            todo.isedit = true
        }
    }
}
</script>

<style scoped>
 li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-top:1px solid #ddd;
    
 }
 li label{
    float: left;
    cursor: pointer;
 }
 li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
 }
 li button{
    float:right;
    display: none;
    margin-top: 3px;
 }
 li:before{
    content: initial;
 }
 li:last-child{
    border-bottom: none;
 }
 li:hover{
    background-color: #ddd;
 }
 li:hover button{
    display: block;
 }
</style>