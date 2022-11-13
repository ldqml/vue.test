import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const actions ={
    add(content,value){
        content.commit('Add',value)
    }
}
const mutations ={
    Add(state,value){
        state.sum += value
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