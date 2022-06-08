import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin: false,
    username:'xxx',
    id:'',
    postid:'',
    input:''
  },
  getters: {
  },
  mutations: {
    login(state){
      state.islogin = true
    },
    logout(state){
      state.islogin = false
    },
    sear(state,inp){
      state.input=inp
    }
  },
  actions: {
  },
  modules: {
  }
})
