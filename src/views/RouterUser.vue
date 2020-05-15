<template>
  <div class="router-user">
    <h1>{{username||id}}</h1>
  </div>
</template>

<script>
  export default {
    props: {
      username: {
        type: String
      },
      id: {
        type: String
      }
    },
    name: "RouterUser",
    /*
    * 导航守卫分为3种：
    * 1.全局的导航守卫:
    *   beforeEach(to,from,next):一定要调用next()函数来resolve状态 执行效果依赖next()函数的执行
    *   beforeResolve():与beforeEach()类似,只不过无法改变导航的方向了
    *   afterEach(to,from):在导航完成之后触发,无法改变导航的方向了
    *
    * 2.路由级别的导航守卫:
    *   beforeEnter(to,from,next):一定要调用next()函数来resolve状态
    *     routes: [
    *           {
    *             path: '/foo',
    *             component: Foo,
    *             beforeEnter: (to, from, next) => {
    *             //do something...
    *           }
    *         }
    *     ]
    *
    * 3.组件级别的导航守卫:
    *   beforeRouteEnter
    *   beforeRouteUpdate
    *   beforeRouteLeave
    * */
    beforeRouteUpdate(to, from, next) {
      // react to route changes...
      // don't forget to call next()
      console.log(to)
      next()
    },
    beforeCreate() {
      console.log('beforeCreate()')
    },
    created() {
      console.log('created()')
    },
    beforeDestroy() {
      console.log('beforeDestroy()')
    },
    destroyed() {
      console.log('destroyed()')
    },
    data() {
      return {}
    },
    watch: {
      // $route(to, from) {
      //   console.log('$route changed')
      // }
    }
  }
</script>

<style scoped>

</style>
