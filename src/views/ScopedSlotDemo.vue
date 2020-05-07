<template>
  <div class="scoped-slot-demo">
    <ScopedSlot>

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
