import vuex, { Commit } from 'vuex'

interface State {
  count: 0
}

export default {
  namespaced: true,
  state: (): State => ({
    count: 0
  }),
  mutations: {
    addCount (state: State) {
      state.count += 1
    }
  },
  actions: {
    addCount ({ commit }: { commit: Commit }) {
      commit('addCount')
    }
  },
  getters: {
    count: (state: State) => state.count
  }
}

