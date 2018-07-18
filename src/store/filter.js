export default {
  state: {
    filterBy: 'all'
  },
  mutations: {
    changeFilter (state, payload) {
      state.filterBy = payload
    }
  },
  actions: {
    changeFilter ({ commit }, payload) {
      commit('changeFilter', payload)
    }
  },
  getters: {
    getFilterByVal (state) {
      return state.filterBy
    }
  }
}
