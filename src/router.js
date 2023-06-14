import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue' ;

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      'path': '/',
      'name': 'home',
      'component': HomeView
    }
  ]
})

export {router}