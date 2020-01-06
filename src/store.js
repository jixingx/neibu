import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  user:{}
}
const getters={
  getUser(state){
    return state.user
  }
}
const mutations={
  mutUser(state,user){
    state.user=user;
  }
}
const actions={
  acUser(context,user){
    context.commit("mutUser",user)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
