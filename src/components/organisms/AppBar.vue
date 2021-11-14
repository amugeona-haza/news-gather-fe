<template>
  <header class="px-4 py-4 flex justify-between">
    <div class="text-2xl font-bold flex items-center">
      {{ title }}
    </div>
    <template v-if="isAuthenticated">
      <button
        v-ripple
        type="button"
        class="w-10 h-10 rounded-full"
      >
        <img
          class="rounded-full shadow-lg"
          alt="profile image"
          :src="user.thumbnailImage"
        />
      </button>
    </template>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const title = computed(() => route.meta.title || 'News Gather')
const user = computed(() => store.getters['auth/user'])
const isAuthenticated = computed<boolean>(() => store.getters['auth/isAuthenticated'])

</script>

<style scoped lang="scss">

</style>
