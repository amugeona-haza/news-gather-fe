<template>
  <main v-if="show" class="container mx-auto max-w-xl">
    <app-bar />
    <router-view />
  </main>
  <div
    v-else
    class="w-full h-full flex justify-center items-center"
  >
    <div class="flex items-center justify-center space-x-2 animate-bounce">
      <div class="w-4 h-4 bg-blue-400 rounded-full"></div>
      <div class="w-4 h-4 bg-green-400 rounded-full"></div>
      <div class="w-4 h-4 bg-black rounded-full"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useAuth from '@/hooks/useAuth'
import AppBar from '@/components/organisms/AppBar.vue'

const { show } = useAuth()
// const show = false
</script>

<style scoped lang="scss">

</style>
