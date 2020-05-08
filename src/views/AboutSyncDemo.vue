<template>
  <div class="about-sync-demo">
    <!--
    <SyncDemo :username="username" @update:username="username = $event"/>
    -->
    <!--
        下面的写法是简写模式:使用.sync修饰符
        1.vue提供的语法糖`.sync`修饰符，其本质就是给父组件添加了子组件发布的自定义事件的监听处理函数
          而且该语法糖只能去改变父组件传入子组件的prop属性的值，其他的都做不了
    -->
    <SyncDemo :username.sync="username"/>
  </div>
</template>

<script>
  import SyncDemo from '../components/SyncDemo'

  export default {
    data() {
      return {
        username: '周杰伦'
      }
    },
    components: {
      SyncDemo
    }
  }
</script>

<style lang="less" scoped>

</style>
