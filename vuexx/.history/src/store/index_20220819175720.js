import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const actions ={
    add(content,value){
        content.commit('Add',value)
    },
    jian(content,value){
        content.commit('Jian',value)
    },
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