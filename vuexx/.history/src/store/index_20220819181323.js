import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const actions ={
    Ji(content,value){
        if(content.state.sum % 2){
            content.commit('Add',value)
        }
    },
    Timeadd(content,value){
        setTimeout(() =>{
            content.commit('Add',value)
        },1000)
    }
}
const mutations ={
    Add(state,value){
        state.sum += value
    },
    Jian(state,value){
        state.sum -= value
    }
}
const state ={
    sum:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})