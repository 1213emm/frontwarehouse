import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin: false,
    username:"xxx",
    id:0,
    personalIndex:1
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
    toInfo(state) {
      state.personalIndex=1
    },
    toFavor(state) {
      state.personalIndex=2
    },
    toHistory(state) {
      state.personalIndex=3
    },
    toMyPost(state) {
      state.personalIndex=4
    }
  },
  actions: {
  },
  modules: {
  }
})
