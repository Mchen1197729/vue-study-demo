<template>
  <!--
      关于作用于插槽的一些使用
  -->
  <div class="scoped-slot">
    <h1>
      <slot #name>{{user.firstName}}</slot>
    </h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          firstName: 'Kobe',
          lastName: 'Brant'
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
