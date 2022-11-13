import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const actions ={}
const mutations ={}
const state ={
    sum:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})