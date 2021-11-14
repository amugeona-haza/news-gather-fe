import { createStore } from 'vuex'
import api from './modules/api'
import auth from '@/store/modules/auth'

const store = createStore({
  modules: {
    api: api,
    auth: auth
  }
})

export default store
