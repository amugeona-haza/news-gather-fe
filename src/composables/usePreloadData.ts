import { ref } from 'vue'

export default function usePreloadData() {
  const preloadResponse = ref()

  return {
    preloadResponse
  }
}
