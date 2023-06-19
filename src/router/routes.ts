/*
 * @Author       : lastshrek
 * @Date         : 2023-06-16 22:42:46
 * @LastEditors  : lastshrek
 * @LastEditTime : 2023-06-16 22:57:38
 * @FilePath     : /src/router/routes.ts
 * @Description  : routes
 * Copyright 2023 lastshrek, All Rights Reserved.
 * 2023-06-16 22:42:46
 */

import { RouteRecordRaw } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/home.vue') },
] as RouteRecordRaw[]

export default routes
