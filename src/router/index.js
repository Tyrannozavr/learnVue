import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExampleView from "@/views/ExampleView.vue";
import RootView from "@/views/RootView.vue";
// import TestPage from "@/views/TestPage.vue";

const routes = [
  {
    path: '/',
    name: 'root',
    component: RootView
  },
  {
    path: '/posts',
    name: 'home',
    component: HomeView
  },
  {
    path: '/example',
    name: 'example',
    component: ExampleView
  }
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: TestPage
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
