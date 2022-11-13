<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前值扩大10倍为:{{Bigsum}}</h1>
    <h1>person组件的总人数是:{{personlist.lenght}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="jia(n)">+</button>
    <button @click="jian(n)">-</button>
    <button @click="ji(n)">当前求和为基数再加</button>
    <button @click="deng(n)">等等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState,mapMutations,mapActions} from 'vuex'
export default {
    name:'SumAdd',
    data(){
        return{
            n:1,
        }
    },
    methods:{
        ...mapMutations({jia:'Add',jian:'Jian'}),
        ...mapActions({ji:'Ji',deng:'Timeadd'})
    },
    computed:{
        ...mapState({sum:'sum',personlist:'personlist'}),
        ...mapGetters({Bigsum:'Bigsum'})
    },
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>