/*
 * @Author: lastshrek
 * @Date: 2023-05-30 20:37:50
 * @LastEditors: lastshrek
 * @LastEditTime: 2023-05-30 21:52:01
 * @Description: router
 * @FilePath: /vue3-tailwind-scaffold/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import { App} from 'vue'
const router = createRouter({
		history: createWebHistory(),
		routes: [{ path: '/', component: () => import('../views/home.vue')}]
	})

export function setupRouter(app: App) {
	app.use(router)
}

export default router