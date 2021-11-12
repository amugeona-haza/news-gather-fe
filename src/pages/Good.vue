<template>
  <div>
    {{ preloadResponse }}
  </div>
</template>

<script lang="ts">
import { scriptLoad } from '../composables/useScriptLoad'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function message (msg: string, ms: number) {
  await delay(ms)
  console.log(msg)
  return msg
}

export default scriptLoad([message('Hello', 1000), message('World', 2000)])
</script>

<script setup lang="ts">
import usePreloadData from '@/composables/usePreloadData'

const { preloadResponse } = usePreloadData()
</script>


