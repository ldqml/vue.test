<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li></li>
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
    }
}
</script>

<style>

</style>