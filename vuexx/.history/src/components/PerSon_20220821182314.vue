<template>
  <div>
    <h1>人员列表</h1>
    <h1>sumadd组件的求和为:{{sum}}</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personlist" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
    name:"PerSon",
    data(){
        return{
            name:''
        }
    },
    computed:{
        personlist(){
            return this.$store.state.personlist
        }
    },
    methods:{
        add(){
            const personobj = {id:nanoid(),name:this.name}
            this.$store.commit('Addname',personobj)
            this.name =''
        }
    }
}
</script>

<style>

</style>