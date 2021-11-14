import { createApp } from 'vue'
import { createRippleDirective } from 'vue-create-ripple'
import VueKakaoSdk from 'vue3-kakao-sdk'
import store from '@/store'
import { router } from '@/routes'
import App from './App.vue'

import './assets/styles/index.scss'

const app = createApp(App)
  .directive('ripple',
    createRippleDirective({
      class: 'bg-black opacity-30'
    })
  )
  .use(store)
  .use(VueKakaoSdk, {
    apiKey: '318af20a7053527c45e06cc36e01aac2'
  })
  .use(router)
  .mount('#app')
