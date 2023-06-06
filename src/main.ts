/*
 * @Author: lastshrek
 * @Date: 2023-05-30 19:40:00
 * @LastEditors: lastshrek
 * @LastEditTime: 2023-05-30 21:54:55
 * @Description: main.ts
 * @FilePath: /vue3-tailwind-scaffold/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)

  await router.isReady()
  app.mount('#app')
}

bootstrap()
