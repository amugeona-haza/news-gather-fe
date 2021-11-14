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
        <span class="font-bold text-indigo-600">News Gather</span>
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
import Kakao, { useKakao } from 'vue3-kakao-sdk'
import { useStore } from 'vuex'
import { computed, onMounted, reactive, Ref, ref } from 'vue'
import useCalculateContainerHeight from '@/hooks/useCalculateContainerHeight'
import axios from 'axios'

const { kakao, initialize } = useKakao()
const store = useStore()

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

      kakao.value.API.request({
        url: '/v2/user/me',
        success (zxc) {
          console.log(zxc)
        }
      })
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
