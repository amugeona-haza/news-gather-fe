<template>
  <section class="px-4">
    <div class="text-2xl">
      <p>
        <span class="font-bold text-indigo-500">{{ user.nickName }}</span>님 에게
      </p>
      <p>
        추천하는 키워드 뉴스
      </p>
      <p class="font-bold">
        TOP 5
      </p>
    </div>
  </section>
  <section class="px-4 mb-4">
    <template
        v-for="(item, index) in mockItems"
        :key="index"
    >
      <div
          v-ripple
          class="rounded px-4 py-4 w-full flex items-center mb-2"
      >
        <img
            :src="item.image.src"
            :alt="item.image.alt"
            class="w-8 h-8 rounded mr-4"
        />
        <div class="text-lg font-bold text-gray-600">
          {{ item.order }}. {{ item.title }}
        </div>
      </div>
    </template>
  </section>
  <section class="px-4">
    <div class="text-2xl">
      <p>
        지난 <span class="font-bold text-indigo-500">한주</span>동안
      </p>
      <p>
        인기 있었던 키워드
      </p>
      <p class="font-bold">
        TOP 5
      </p>
    </div>
  </section>
  <section class="px-4 mb-4">
    <template
        v-for="(item, index) in mockItems"
        :key="index"
    >
      <div
          v-ripple
          class="rounded px-4 py-4 w-full flex items-center mb-2"
      >
        <img
            :src="item.image.src"
            :alt="item.image.alt"
            class="w-8 h-8 rounded mr-4"
        />
        <div class="text-lg font-bold text-gray-600">
          {{ item.order }}. {{ item.title }}
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

const router = useRouter()
const store = useStore()

const user = computed(() => store.getters['auth/user'])

const toSetting = () => {
  router.push('/Setting')
}

interface MocKItem {
  image: {
    src: string;
    alt: string;
  }
  order: number;
  title: string;
}
const mockItems: MocKItem[] = [
  {
    image: {
      src: 'data:image/png;base64,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',
      alt: 'nc'
    },
    order: 1,
    title: 'NC 소프트 상한가 달성'
  },
  {
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfTaYPxDTXjNqs36DAlLtmzEhi9lTIS2YHcXZ8zXIoCZ3ysAW13utOL4Wbh639jD1tEM&usqp=CAU',
      alt: 'tesla'
    },
    order: 2,
    title: '테슬라 주식 1주 1000달러 재달성'
  },
  {
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfTaYPxDTXjNqs36DAlLtmzEhi9lTIS2YHcXZ8zXIoCZ3ysAW13utOL4Wbh639jD1tEM&usqp=CAU',
      alt: 'tesla'
    },
    order: 3,
    title: '테슬라 주식 1주 1000달러 재달성'
  },
  {
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfTaYPxDTXjNqs36DAlLtmzEhi9lTIS2YHcXZ8zXIoCZ3ysAW13utOL4Wbh639jD1tEM&usqp=CAU',
      alt: 'tesla'
    },
    order: 4,
    title: '테슬라 주식 1주 1000달러 재달성'
  },
  {
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfTaYPxDTXjNqs36DAlLtmzEhi9lTIS2YHcXZ8zXIoCZ3ysAW13utOL4Wbh639jD1tEM&usqp=CAU',
      alt: 'tesla'
    },
    order: 5,
    title: '테슬라 주식 1주 1000달러 재달성'
  },
]
</script>

<style scoped>

</style>
