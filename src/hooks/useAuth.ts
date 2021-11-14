import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useKakao } from 'vue3-kakao-sdk'
import { onBeforeMount, ref } from 'vue'

const kakaoAccessToken = localStorage.getItem('KAKAO_ACCESS_TOKEN')

export default function useAuth() {
  const router = useRouter()
  const store = useStore()
  const { kakao, initialize } = useKakao()
  const show = ref(false)

  onBeforeMount(async () => {
    if (store.getters['auth/isAuthenticated']) {
      show.value = true
      return
    }

    await initialize()

    if (kakaoAccessToken && kakaoAccessToken.length > 0) {
      kakao.value.Auth.setAccessToken(kakaoAccessToken)
    }

    try {
      await store.dispatch('auth/fetchKakaoUser')
      show.value = true
    } catch (e) {
      router.push('/auth/login')
    }
  })

  return {
    show
  }
}
