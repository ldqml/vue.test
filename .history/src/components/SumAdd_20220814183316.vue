<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <select v-model.number="n">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
    </select>
    <button @click="jia">+1</button>
    <button @click="jian">-1</button>
    <button @click="ji">当前求和为基数再加</button>
    <button @click="deng">等等再加</button>
  </div>
</template>

<script>
export default {
    name:'SumAdd',
    data(){
        return{
            n:1,
            sum:0
        }
    }
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>