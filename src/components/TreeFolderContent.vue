<template>
  <ul>
    <li v-for="child in children">
      <tree-folder v-if="child.children" :folder="child"/>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      children: {
        type: Array
      }
    },
    data() {
      return {}
    },
    components: {
      'tree-folder': () => import('./TreeFolder')
    }
  }
</script>

<style lang="less" scoped>

</style>
