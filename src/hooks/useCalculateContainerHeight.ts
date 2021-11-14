import { computed, Ref } from 'vue'

export default function useCalculateContainerHeight (container: Ref<HTMLElement>, ...elements: Ref<HTMLElement>[]) {
  return computed<number>(() =>
    container.value?.clientHeight - elements.reduce((acc, x) => acc + x.value?.clientHeight, 0)
  )
}
