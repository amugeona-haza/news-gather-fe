import { createStore } from 'vuex'
import api from './modules/api'

const store = createStore({
  modules: {
    api: api
  }
})

export default store
