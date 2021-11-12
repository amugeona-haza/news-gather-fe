import { defineComponent, ref } from "vue";
export function scriptLoad(apiFunctions: any[]) {
  return defineComponent({
    async beforeRouteEnter(to, from, next) {
      try {
        const response = await Promise.all(apiFunctions)
        next((vm) => ((vm as any).preloadResponse = response))
      } catch {
        next()
      }
    }
  })
}
