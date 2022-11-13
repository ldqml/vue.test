<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <select v-model.number="n">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
    </select>
    <button>+1</button>
    <button>-1</button>
    <button>当前求和为基数再加</button>
    <button>等等再加</button>
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