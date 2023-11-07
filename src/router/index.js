import { createRouter, createWebHistory } from 'vue-router'
import Homes from '../components/Homes.vue'
import Details from '../components/Details.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "App",
      component: Homes
    },
    {
      path: "/details/:id",
      name: "Details",
      component: Details,
    }
  ]
})

export default router
