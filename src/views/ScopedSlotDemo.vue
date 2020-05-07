<template>
  <div class="scoped-slot-demo">
    <ScopedSlot>
      <template #default="{user,student}">
        <h3>这是替换default插槽的内容=={{user.lastName}}=={{student.age}}</h3>
      </template>
      <template #user="{user}">
        <h3>这是替换user插槽的内容=={{user.lastName}}</h3>
      </template>
      <template #student="{student}">
        <h3>这是替换student插槽的内容=={{student.age}}</h3>
      </template>
    </ScopedSlot>
  </div>
</template>

<script>
  import ScopedSlot from '../components/ScopedSlot'

  export default {
    data() {
      return {}
    },
    components: {
      ScopedSlot
    }
  }
</script>

<style lang="less" scoped>

</style>
