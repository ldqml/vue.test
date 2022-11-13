<template>
  <div>
    <li deletetodo='deletetodo'>
        <label>
            <input type="checkbox" :checked='todo.done' @change="changele(todo.id)">
            <span v-show="!todo.isedit">{{todo.title}}</span>
            <input ref="jiao" v-show="todo.isedit" type="text" :value="todo.title" @blur="removejd(todo,$event)">
        </label>
        <button class="btn btn-danger" @click="removetodo(todo.id)">删除</button>
        <button v-show="!todo.isedit" class="btn btn-edit" @click="edittodo(todo)">编辑</button>
        </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
    name:'MyItem',
    props:['todo'],
    methods:{
        changele(id){
            this.$bus.$emit('checktodo',id)
        },
        removetodo(id){
            if(confirm('确定删除吗？')){
                pubsub.publish('deletetodo',id)
            }
        },
        edittodo(todo){
           this(todo,'isedit',true)
           this.$nextTick(function(){
            this.$refs.jiao.focus()
           }) 
        },
        removejd(todo,e){
            todo.isedit = false
            this.$bus.$emit('bianji',todo.id,e.target.value)
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