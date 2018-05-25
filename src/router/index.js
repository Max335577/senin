import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/pages/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Users
    }
  ]
})