import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let api_path = "/Money.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    moneys: (state) => state.data,
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data.data;
    },
    add(state, { payload }) {
      state.data.push(payload);
    },
  },
  actions: {
    async fetchMoney({ commit }) {
      let res = await Axios.get(api_path);
      commit("fetch", { res });
    },
    addMoney({ commit }, payload) {
      commit("add", { payload });
    },
  },
  modules: {},
});
