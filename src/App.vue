<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">计算属性</router-link>
      |
      <router-link to="/watch">侦听器</router-link>
      |
      <router-link to="/steps">步骤条</router-link>
      |
      <router-link to="/conditional">条件渲染</router-link>
      |
      <router-link to="/slot">使用插槽</router-link>
      |
      <router-link to="/scoped-slot">作用域插槽</router-link>
      |
      <router-link to="/require-context">批量导入组件</router-link>
      |
      <router-link to="/about-props">关于props</router-link>
      |
      <router-link to="/about-sync">关于.sync</router-link>
      |
      <router-link to="/super-sub">组件之间循环引用</router-link>
      |
      <router-link to="/transition">过渡效果</router-link>
      |
      <router-link to="/filters">使用过滤器</router-link>
      |
      <router-link to="/vuex-demo">使用Vuex</router-link>
      |
      <router-link to="/vuex-module-demo">使用Vuex+Module</router-link>
    </div>
    <div id="nav1">
      <button @click="clickButton">响应路由参数的变化</button>
      <button @click="clickButton2">响应路由参数的变化2</button>
    </div>
    <hr>
    <!--
        使用keep-alive可以缓存路由组件
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: -1,
        users: ['tom', 'jerry', 'jack', 'rose']
      }
    },
    methods: {
      //确保每一次点击跳转的路由不相同
      clickButton() {
        this.index++;
        this.index = this.index % this.users.length
        const username = this.users[this.index]
        /*
        * 1.this.$router.push()方法返回一个Promise类型的对象(状态已经凝固)
        *
        * 2.this.$router.push()会想浏览器的history栈中添加一条记录 如果点击了浏览器上方的返回键 则回到上一步
        *
        * 3.this.$router.replace()是不会向浏览器history栈中添加记录的 它会换掉当前的这条history记录
        *
        * */
        //使用命名路由来实现导航
        this.$router.push({name: 'RouterUser', params: {username}})
            //this.$router.push(`/router-user/${username}`)
            .then(data => {
              //此时的data就是成功跳转的路由对应的路由对象
              console.log(data)
            })
            .catch(err => {
              //如果重复跳转到同一个目标地址 则会触发此回调函数
              console.log(err)
            })
      },
      clickButton2() {
        this.$router.push('/router-user?id=12')
      }
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*改变默认的鼠标样式*/
    /*cursor: url('../public/cursor.ico'), default;*/
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #nav1 {
    padding: 30px;
  }

  #nav1 a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav1 a.router-link-exact-active {
    color: #42b983;
  }
</style>
