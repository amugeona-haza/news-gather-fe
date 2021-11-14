<template>
  <main v-show="show">
    Default Layout
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import useAuth from '@/hooks/useAuth'

const { show } = useAuth()
</script>

<style scoped lang="scss">

</style>
