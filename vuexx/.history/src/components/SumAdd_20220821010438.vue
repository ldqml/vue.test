<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前值扩大10倍为:{{Bigsum}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="ji">当前求和为基数再加</button>
    <button @click="deng">等等再加</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'SumAdd',
    data(){
        return{
            n:1,
        }
    },
    methods:{
        jia(){
            this.$store.commit('Add',this.n)
        },
        jian(){
            this.$store.commit('Jian',this.n)
        },
        ji(){
            if(this.$store.state.sum % 2){
                this.$store.dispatch('Ji',this.n)
            }
        },
        deng(){
            setTimeout(
                ()=>{
                    this.$store.dispatch('Timeadd',this.n)
                }
            ,1000)
        },
    },
    computed:{
        ...mapState({sum:'sum'})
    },
}
</script>

<style>
button{
    margin-left: 5px;
}
</style>