import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import About from './About'
export default createRouter({
  history: createWebHashHistory(), //hash mode
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})