<template>
  <div class="sync-demo">
    <h2 ref="username">{{username}}</h2>
    <div>
      <button @click="updateUsername">修改username</button>
      <button @click="showSuperData">访问父组件中的内容</button>
      <button @click="showSelfDom">访问组件自身的dom元素</button>
      <hr>
      <h2>依赖注入</h2>
      <button @click="useInject">使用父组件注入的数据</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SyncDemo',
    inject: ['super_name', 'super_say', 'root_name'],
    props: {
      username: {
        type: String,
        default: '林志玲'
      }
    },
    data() {
      return {}
    },
    methods: {
      updateUsername() {
        this.$emit('update:username', '波多野结衣')
      },
      showSuperData() {
        //在子组件中访问根实例组件this.$root(指的是在main.js文件中创建的Vue实例)的数据（一般不用）
        console.log(this.$root)
        //this.$parent只的是使用了该组件的父组件（一般不用）
        console.log(this.$parent)
      },
      showSelfDom() {
        console.dir(this.$refs.username)
      },
      useInject() {
        this.super_say()
        console.log(this.super_name, this.root_name)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
