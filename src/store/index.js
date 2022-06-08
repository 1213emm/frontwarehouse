import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin: false,
    username:"xxx",
    id:0,
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
    saveUser(state,user){
      state.username=user.username,
      state.id=user.id
    },
  },
  actions: {
  },
  modules: {
  }
})
