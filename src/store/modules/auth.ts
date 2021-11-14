import vuex, { Commit } from 'vuex'
import { Nullable } from '@/types/base'
import { KakaoResponse, KakaoUser } from '@/types/kakao'
import { useKakao } from 'vue3-kakao-sdk'
import { stat } from 'fs'

const { kakao } = useKakao()

interface State {
  user: {
    nickName: Nullable<string>;
    profileImage: Nullable<string>;
    thumbnailImage: Nullable<string>;
  }
  isAuthenticated: boolean;
}

export default {
  namespaced: true,
  state: (): State => ({
    user: {
      nickName: null,
      profileImage: null,
      thumbnailImage: null
    },
    isAuthenticated: false
  }),
  mutations: {
    setUser (state: State, user: KakaoUser) {
      state.user.nickName = user.nickname
      state.user.profileImage = user.profile_image
      state.user.thumbnailImage = user.thumbnail_image
      state.isAuthenticated = true
    }
  },
  actions: {
    fetchKakaoUser ({ commit }: { commit: Commit }) {
      return new Promise((resolve, reject) => {
        kakao.value.API.request({
          url: '/v2/user/me',
          success (success) {
            commit('setUser', success.properties)
            resolve(success.properties)
          },
          fail (error) {
            reject(error)
          }
        })
      })
    }
  },
  getters: {
    user: (state: State) => state.user,
    isAuthenticated: (state: State) => state.isAuthenticated
  }
}

