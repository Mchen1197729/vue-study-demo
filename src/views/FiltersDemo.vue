<template>
  <div class="filters-demo">
    <h1>过滤器使用示例</h1>
    <h2>{{username | capitalize}}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: 'jerry'
      }
    },
    //添加局部过滤器
    filters: {
      //过滤器是一个function 接受一个值作为参数 返回一个新的值
      capitalize(value) {
        const str = value.toString()
        if (str.length > 0) {
          return str[0].toUpperCase() + str.substr(1)
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
