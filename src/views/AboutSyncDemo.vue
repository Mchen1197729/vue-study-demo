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

  export default {
    data() {
      return {
        username: '周杰伦'
      }
    },
    components: {
      /*
      * 注册同步组件和异步组件的区别
      * 1.同步组件：components:{组件名1:组件对象1,...}
      * 2.异步组件:components:{组件名1:()=>{return 组件对象1;}}
      * */
      SyncDemo: () => import('../components/SyncDemo')
    }
  }
</script>

<style lang="less" scoped>

</style>
