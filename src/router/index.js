import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/watch',
    name: 'WatchProperty',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchProperty')
  },
  {
    path: '/steps',
    name: 'SimpleSteps',
    component: () => import(/* webpackChunkName: "simpleSteps" */ '../views/Steps')
  },
  {
    path: '/conditional',
    name: 'ConditionalRender',
    component: () => import(/* webpackChunkName: "ConditionalRender" */ '../views/ConditionalRender')
  },
  {
    path: '/slot',
    name: 'SlotDemo',
    component: () => import(/* webpackChunkName: "SlotDemo" */ '../views/SlotDemo')
  },
  {
    path: '/scoped-slot',
    name: 'ScopedSlotDemo',
    component: () => import(/* webpackChunkName: "ScopedSlotDemo" */ '../views/ScopedSlotDemo')
  }
]

const router = new VueRouter({
  routes
})

export default router
