<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personlist" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
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
    }
}
</script>

<style>

</style>