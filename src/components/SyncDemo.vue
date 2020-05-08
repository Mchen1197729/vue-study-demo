<template>
  <div class="sync-demo">
    <h2>{{username}}</h2>
    <div>
      <button @click="updateUsername">修改username</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      username: {
        type: String,
        default: '林志玲'
      }
    },
    data() {
      return {}
    },
    methods: {
      updateUsername() {
        this.$emit('update:username', '波多野结衣')
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
