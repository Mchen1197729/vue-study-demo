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
    </div>
    <!--
        使用keep-alive可以缓存路由组件
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

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
</style>
