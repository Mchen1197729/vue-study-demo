<template>
  <input type="text" placeholder="your username">
</template>

<script>
  export default {
    /*
    * 0.父组件传递的style和class属性会被子组件合并到根元素上，然而其他的非props的属性会将子组件的同名属性替换掉
    *
    * 1.inheritAttrs:属性表示该自定义组件是否会继承父组件传递的非props的属性
    *
    * 2.如果传入的值在子组件中被声明为了props，那么子组件不会继承父组件传递的这个值
    *
    * 3.但是父组件传递的style和class属性默认都会被子组件继承(不管inheritAttrs的值)
    *
    * */
    inheritAttrs: false,
    props: {
      value: {
        type: String,
        default: '林志玲'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>

</style>
