<template>
  <!--
      vue2.6以后新增的关于slot的使用方式
  -->
  <div class="new-slot-item">
    <header>
      <slot #header/>
    </header>
    <main>
      <slot #default/>
    </main>
    <footer>
      <slot #footer/>
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
