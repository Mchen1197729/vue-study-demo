<template>
  <!--
      vue2.6以后新增的关于slot的使用方式
  -->
  <div class="new-slot-item">
    <header>
      <slot name="header"/>
    </header>
    <main>
      <slot name="default"/>
    </main>
    <footer>
      <slot name="footer"/>
    </footer>
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

</style>
