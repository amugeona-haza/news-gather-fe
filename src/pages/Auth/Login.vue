<template>
  <div>
    News Gather
  </div>
  <div>
    <button
      v-ripple
      type="button"
      class="px-4 py-2 bg-indigo-500 text-white shadow-md rounded mx-2"
      @click="onClickBtn"
    >
      Login 1
    </button>
    <button
        v-ripple
        type="button"
        class="px-4 py-2 bg-indigo-500 text-white shadow-md rounded mx-2"
    >
      Login 2
    </button>
  </div>
</template>

<script lang="ts">
</script>

<script lang="ts" setup>
import { useKakao, Kakao } from 'vue3-kakao-sdk'

const { kakao } = useKakao()

const onClickBtn = () => {
  kakao.value.Auth.login({
    success (success: Kakao.Auth.AuthSuccessObject) {
      console.log(success.access_token)
    },
    fail (err) {
      console.error(err)
    }
  })
}
</script>

<style scoped>

</style>
