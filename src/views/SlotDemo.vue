<template>
  <!--
      使用vue自定义的标签<slot>
  -->
  <div class="slot-demo">
    <TestSlotItem>
      Something bad happened.
    </TestSlotItem>
    <br>
    <TestSlotItem>
      <h4>Hello This is real fun</h4>
      <h3>My name is chenMM</h3>
    </TestSlotItem>
    <hr>
    <h1>Vue2.6后新增的关于slot的使用方式</h1>
    <NewSlotItem>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </NewSlotItem>
  </div>
</template>

<script>
  import TestSlotItem from '../components/TestSlotItem'
  import NewSlotItem from '../components/NewSlotItem'

  export default {
    data() {
      return {}
    },
    components: {
      TestSlotItem, NewSlotItem
    }
  }
</script>

<style lang="less" scoped>

</style>
