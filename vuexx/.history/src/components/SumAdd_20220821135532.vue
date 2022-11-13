<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前值扩大10倍为:{{Bigsum}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="jia(n)">+</button>
    <button @click="jian(n)">-</button>
    <button @click="ji">当前求和为基数再加</button>
    <button @click="deng">等等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState,mapMutations} from 'vuex'
export default {
    name:'SumAdd',
    data(){
        return{
            n:1,
        }
    },
    methods:{
        ...mapMutations({jia:'Add',jian:'Jian'}),
        ji(){
                this.$store.dispatch('Ji',this.n)
        },
        deng(){
                this.$store.dispatch('Timeadd',this.n)
        },
    },
    computed:{
        ...mapState({sum:'sum'}),
        ...mapGetters({Bigsum:'Bigsum'})
    },
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>