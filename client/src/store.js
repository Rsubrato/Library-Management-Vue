import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // token:localStorage.getItem('token'),
    token:'',
    role:'',
  },
  mutations: {
    setToken:(state,token)=>{
      state.token=token
    },
    setRole:(state,role)=>{
      state.role=role
    }
  },
  actions: {
  //   changeToken({commit}, token){
  //     commit('setToken', token)
  // }

  },
  getters: {
    getToken(state){
      return state.token;
    }
  },
  plugins: [createPersistedState()],
});
