import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Project from '@/views/Project.vue'
import Blog from '@/views/Blog.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/project',
    component: Project,
  },
  {
    path: '/blog',
    component: Blog,
  },
  {
    path: '/about',
    component: About,
  },

]

const router = new VueRouter({
  routes
})

export default router
