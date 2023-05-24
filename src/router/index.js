import { createRouter, createWebHashHistory } from 'vue-router'
import Form from '/src/pages/Form.vue'
import Preview from '/src/pages/Preview.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "form",
      component: Form,
    },
    {
      path: "/preview",
      name: "preview",
      component: Preview,
    },
  ]
})

export default router
