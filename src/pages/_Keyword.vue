<template>
  <section class="px-4">
    <div class="text-2xl">
      <p>
        <span class="font-bold text-indigo-500">{{ data.keyword }}</span>과 관련된
      </p>
      <p>
        내가 구독한 뉴스레터들
      </p>
    </div>
  </section>
  <section class="mb-4">
    <template
      v-for="(item, index) in data.myNewsLatterList"
      :key="index"
    >
      <div
        v-ripple
        class="rounded px-4 py-4 w-full flex items-center"
        @click="onClickItem(item)"
      >
        <img
          :src="item.image.src"
          :alt="item.image.alt"
          class="w-16 h-16 rounded mr-4 object-cover"
        />
        <div class="text-lg text-gray-600">
          <h3 class="font-bold text-xl">
            {{ item.order }}. {{ item.title }}
          </h3>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </template>
  </section>
  <section class="px-4">
    <div class="text-2xl">
      <p>
        <span class="font-bold text-indigo-500">{{ data.keyword }}</span>과 관련된
      </p>
      <p>
        인기있는 뉴스레터들
      </p>
    </div>
  </section>
  <section class="mb-4">
    <template
      v-for="(item, index) in data.popularLatterList"
      :key="index"
    >
      <div
        v-ripple
        class="rounded px-4 py-4 w-full flex items-center"
        @click="onClickItem(item)"
      >
        <img
          :src="item.image.src"
          :alt="item.image.alt"
          class="w-16 h-16 rounded mr-4 object-cover"
        />
        <div class="text-lg text-gray-600">
          <h3 class="font-bold text-xl">
            {{ item.order }}. {{ item.title }}
          </h3>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </template>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, onBeforeMount, reactive } from 'vue'
import { MockItem } from '@/types/base'

const route = useRoute()

interface Data {
  keyword: string;
  myNewsLatterList: MockItem[];
  popularLatterList: MockItem[];
}

onBeforeMount(() => {
  route.meta.title = data.keyword
})

const params = computed(() => route.params)
const data = reactive<Data>({
  keyword: '비트코인',
  myNewsLatterList: [
    {
      title: '비트코인, 4년 만에 업그레이드',
      content: '사상 최고치 경신 후 주춤하던 비트코인이 4년 만에 대규모 업그레이드를 진행하며 다시 상승세를 보이고 있다...',
      image: {
        src: 'http://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1072951_16369438014850559.jpg',
        alt: '비트코인'
      },
      order: 1,
      url: 'https://www.mk.co.kr/news/economy/view/2021/11/1072951/'
    },
    {
      title: '가상화폐 비트코인 0.22% 상승',
      content: '현재 암호화폐 거래소 "업비트"에 따르면 가상화폐 대장 격인 비트코인의 시세는 전일 대비 176,000원(0.22%) 상승한 79,486,000원에 거래되고 있다.',
      image: {
        src: 'https://img.wowtv.co.kr/wowtv_news/dnrs/20211115/20211115_1003120_et_vrc01_000000.png',
        alt: '비트코인'
      },
      order: 2,
      url: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202111150189'
    },
    {
      title: '문제의 자산 ‘비트코인 백만개’…‘사토시 나카모토’ 정체 밝힐까\n',
      content: '현재 미국 플로리다에서 비트코인 창시자인 일명 사토시 나카모토의 자산을 두고 진행 중인 재판을 통해 그동안 베일 속에 감춰져 왔던 사토시의 정체가 밝혀질 수 있을지 주목된다고 월스트리트저널이 13일(현지시간) 전했다.',
      image: {
        src: 'https://images.chosun.com/resizer/5uyHnevkLRIZDlXoAdZ7R4i7lV0=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NNOWJAPUOVI4VJ3BXEM3TPLRAU.jpg',
        alt: '비트코인'
      },
      order: 3,
      url: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202111150189'
    },
  ],
  popularLatterList: [
    {
      title: '비트코인, 4년 만에 업그레이드',
      content: '사상 최고치 경신 후 주춤하던 비트코인이 4년 만에 대규모 업그레이드를 진행하며 다시 상승세를 보이고 있다...',
      image: {
        src: 'http://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1072951_16369438014850559.jpg',
        alt: '비트코인'
      },
      order: 1,
      url: 'https://www.mk.co.kr/news/economy/view/2021/11/1072951/'
    },
    {
      title: '가상화폐 비트코인 0.22% 상승',
      content: '현재 암호화폐 거래소 "업비트"에 따르면 가상화폐 대장 격인 비트코인의 시세는 전일 대비 176,000원(0.22%) 상승한 79,486,000원에 거래되고 있다.',
      image: {
        src: 'https://img.wowtv.co.kr/wowtv_news/dnrs/20211115/20211115_1003120_et_vrc01_000000.png',
        alt: '비트코인'
      },
      order: 2,
      url: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202111150189'
    },
    {
      title: '문제의 자산 ‘비트코인 백만개’…‘사토시 나카모토’ 정체 밝힐까\n',
      content: '현재 미국 플로리다에서 비트코인 창시자인 일명 사토시 나카모토의 자산을 두고 진행 중인 재판을 통해 그동안 베일 속에 감춰져 왔던 사토시의 정체가 밝혀질 수 있을지 주목된다고 월스트리트저널이 13일(현지시간) 전했다.',
      image: {
        src: 'https://images.chosun.com/resizer/5uyHnevkLRIZDlXoAdZ7R4i7lV0=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NNOWJAPUOVI4VJ3BXEM3TPLRAU.jpg',
        alt: '비트코인'
      },
      order: 3,
      url: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202111150189'
    },
  ]
})

const onClickItem = (item: MockItem) => {
  window.open(item.url)
}
</script>

<style scoped>

</style>
