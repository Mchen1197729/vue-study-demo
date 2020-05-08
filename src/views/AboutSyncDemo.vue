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
    <SyncDemo ref="syncDemo" :username.sync="username"/>
    <hr>
    <div>
      <button @click="showSubRef">在父组件中访问子组件的$refs属性</button>
    </div>
  </div>
</template>

<script>

  export default {
    /*
    * 依赖注入：provide/inject
    * 1.父组件provide一些数据给任意的后代组件
    * 2.后代组件将这些数据inject到组件自身当中,这样子组件就可以使用父组件中的数据了
    * */
    provide() {
      return {
        super_name: '灭霸',
        super_say() {
          console.log('Hello I am 灭霸')
        }
      }
    },
    data() {
      return {
        username: '周杰伦'
      }
    },
    methods: {
      showSubRef() {
        //通过下面的方式就可以在父组件中访问到子组件中添加了ref属性的原生dom结构了
        console.log(this.$refs.syncDemo.$refs)
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
