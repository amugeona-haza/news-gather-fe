<template>
  <div class="h-full" ref="container">
    <section
      class="pt-24 px-8 text-2xl"
      ref="titleSection"
    >
      <p>
        쉽고 간편한
      </p>
      <p>
        <strong>뉴스레터 구독</strong> 서비스
      </p>
      <p>
        <span class="font-bold text-indigo-600 text-4xl">News Gather</span>
      </p>
    </section>
    <section
      class="w-full relative"
      :style="btnContainer"
    >
      <ul class="btn-list">
        <li class="text-center">
          <button
            v-ripple
            ref="loginButton"
            type="button"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
</script>

<script lang="ts" setup>
import { useKakao } from 'vue3-kakao-sdk'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, reactive, ref, onMounted } from 'vue'
import useCalculateContainerHeight from '@/hooks/useCalculateContainerHeight'

const { kakao, initialize } = useKakao()
const store = useStore()
const router = useRouter()

const loginButton = ref()
const container = ref<HTMLElement>()
const titleSection = ref<HTMLElement>()

const btnContainer = reactive({
  height: computed(() => `${useCalculateContainerHeight(container, titleSection).value}px`)
})

onMounted(async () => {
  await initialize()
  kakao.value.Auth.createLoginButton({
    container: loginButton.value,
    scope: 'profile_nickname profile_image',
    async success (success) {
      const { access_token: accessToken } = success
      kakao.value.Auth.setAccessToken(accessToken)
      localStorage.setItem('KAKAO_ACCESS_TOKEN', accessToken)
      await store.dispatch('auth/fetchKakaoUser')
      router.push('/')
    },
    fail (error) {
      console.error(error)
    }
  })
})
</script>

<style scoped lang="scss">
.btn-list {
  @apply absolute bottom-16 w-full
}
</style>
