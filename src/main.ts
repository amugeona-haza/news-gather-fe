import { createApp } from 'vue'
import { createRippleDirective } from 'vue-create-ripple'
import { router } from '@/routes'
import App from './App.vue'
import './assets/styles/index.scss'

const app = createApp(App)
  .directive('ripple',
    createRippleDirective({
      class: 'bg-black opacity-30'
    })
  )
  .use(router)
  .mount('#app')
