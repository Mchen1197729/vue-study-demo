<template>
  <div class="test-slot-demo">
    <strong>Error!</strong>
    <!--
        slot标签中的内容会被作为后备内容
          1.如果父组件没有传递任何内容给该位置 那么子组件会渲染出该后备内容
          2.如果父组件传递了一些内容给该位置 那么子组件的后备内容就不会显示
    -->
    <slot>Submit</slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .test-slot-demo {
    width: 500px;
    height: 25px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    padding-left: 1%;
    background-color: #f09898;
  }
</style>
