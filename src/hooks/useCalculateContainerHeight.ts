import { computed, Ref } from 'vue'

export default function useCalculateContainerHeight (container: Ref<HTMLElement | undefined>, ...elements: Ref<HTMLElement | undefined>[]) {
  return computed<number>(() => {
    if (container.value === undefined || elements.some(x => x.value === undefined)) {
      return 0
    }

    return container.value.clientHeight - elements.reduce((acc, x) => acc + (x.value?.clientHeight || 0), 0)
  })
}
