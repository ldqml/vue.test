<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <select v-model.number="n">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
    </select>
  </div>
</template>

<script>
export default {
    name:'SumAdd',
    data(){
        return{
            sum:0,
        }
    }
}
</script>

<style>

</style>