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
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/WatchProperty')
  },
  {
    path: '/steps',
    name: 'SimpleSteps',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/Steps')
  },
  {
    path: '/conditional',
    name: 'ConditionalRender',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/ConditionalRender')
  },
  {
    path: '/slot',
    name: 'SlotDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/SlotDemo')
  },
  {
    path: '/scoped-slot',
    name: 'ScopedSlotDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/ScopedSlotDemo')
  },
  {
    path: '/require-context',
    name: 'RequireContextDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/RequireContextDemo')
  },
  {
    path: '/about-props',
    name: 'AboutPropsDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/AboutPropsDemo')
  },
  {
    path: '/about-sync',
    name: 'AboutSyncDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/AboutSyncDemo')
  },
  {
    path: '/super-sub',
    name: 'TreeFileDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/TreeFileDemo')
  },
  {
    path: '/transition',
    name: 'TransitionDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/TransitionDemo')
  },
  {
    path: '/filters',
    name: 'FiltersDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/FiltersDemo')
  },
  {
    path: '/vuex-demo',
    name: 'VuexDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/VuexDemo')
  },
  {
    path: '/vuex-module-demo',
    name: 'VuexModuleDemo',
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/VuexModuleDemo')
  },
  /*
  * 1.此处使用动态路由参数来匹配路径 eg:/router-user/tom /router-user/jerry
  *
  * 2.匹配到的参数会被保留在this.$route.params中 {username:'jerry'}
  *
  * 3.通过声明props:true来实现将username作为props传递给匹配的路由
  *   这样在路由组件中就可以直接使用username了 而不用使用this.$route.params.username来获取匹配的username值了
  *
  * */
  {
    path: '/router-user/:username',
    name: 'RouterUser',
    props: true,
    meta: {
      requireAuth: true,
      requireName: true,
    },
    component: () => import(/* webpackChunkName: "CHEN" */ '../views/RouterUser')
  }
]

const router = new VueRouter({
  routes,
  //base: '/vue-demo/'
})

//添加全局导航守卫
router.beforeEach((to, from, next) => {
  console.log(to.meta)//{requireAuth: true,requireName: true}
  if (to.meta.requireAuth) {
    /*
    * 可以在此处查看是否已经登陆过
    *   1.如果登录过 直接调用next()
    *   2.如果没有登陆过 则跳转到登录页面 同时要记录此时的to.fullPath以便完成登录验证后再重新导航到原来的页面
    *         next({name:'Login',query:{redirect:to.fullPath}})
    * */
    console.log('requireAuth:true')
  }
  next()
})

export default router
