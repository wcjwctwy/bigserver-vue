import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about/about'
import timeDemo from '@/components/about/timeDemo'
import home from '@/components/home'
import analyse from '@/components/analyse/analyse'
import analyseRouter from './analyse/analyse'
import aboutRouter from './demo/about'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      // children:aboutRouter
    },
    {
      path: '/analyse',
      name: 'analyse',
      component: analyse,
      children: analyseRouter
    },
    {
      path: '/time',
      name: 'timeDemo',
      component: timeDemo,
    }
  ]
})
