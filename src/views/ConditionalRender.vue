<template>
  <!--
      条件渲染的一些细节
  -->
  <div class="conditional-render">
    <h2>v-if without key attribute</h2>
    <template v-if="loginWay1=== 'username1'">
      <label>Username1</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email1</label>
      <input placeholder="Enter your email address">
    </template>
    <div>
      <button @click="toggleLoginWay1">Toggle login way</button>
    </div>
    <hr>
    <h2>v-if with key attribute</h2>
    <template v-if="loginWay2=== 'username2'">
      <label>Username2</label>
      <input placeholder="Enter your username" key="username2">
    </template>
    <template v-else>
      <label>Email2</label>
      <input placeholder="Enter your email address" key="address2">
    </template>
    <div>
      <button @click="toggleLoginWay2">Toggle login way</button>
    </div>
  </div>
</template>

<script>
  /*
  * 心得体会：
  * 1.在<template> 元素上使用v-if条件渲染分组 template标签最终不会被渲染到页面中
  *   在Vue中<template>元素不会被渲染到页面结构中，因此可以用来当做外层盒子
  *
  * 2.关于标签的key属性
  *   2.1如果不想重复使用某一标签 那么就在该标签中添加key属性
  *   2.2如果想重复使用该标签 那么就不要给该标签添加key属性
  *
  * 3.v-if和v-show的区别
  *   3.1v-if是真正的条件渲染 Vue会在创建该标签的时候将标签内部所有的事件监听和子组件都创建出来
  *      v-if还是惰性的 因为只有当添加为true时才会真正的去创建对应的标签
  *   3.2v-show是单纯的操作display属性来达到对应的元素的显示与隐藏
  *      v-show不是惰性的 不管v-show对应的值是true还是false 该标签都会被创建出来
  *
  * */
  export default {
    beforeCreate() {
      console.log('beforeCreate()')
    },
    created() {
      console.log('created()')
    },
    mounted() {
      console.log('mounted()')
    },
    //可以将data函数理解为生命周期钩子函数 发生在beforeCreate()和created()之间
    data() {
      console.log('data()')
      return {
        loginWay1: 'username2',
        loginWay2: 'username2'
      }
    },
    methods: {
      toggleLoginWay1() {
        this.loginWay1 = this.loginWay1 === 'username1' ? '' : 'username1'
      },
      toggleLoginWay2() {
        this.loginWay2 = this.loginWay2 === 'username2' ? '' : 'username2'
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
