import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
import getters from './getter'
import actions from './actons'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store