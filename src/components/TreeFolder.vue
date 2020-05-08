<template>
  <div class="tree-folder">
    <p>
      <span>{{ folder.name }}</span>
      <tree-folder-contents :children="folder.children"/>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      folder: {
        type: Object
      }
    },
    data() {
      return {}
    },
    components: {
      'tree-folder-contents': () => import('./TreeFolderContent')
    }
  }
</script>

<style lang="less" scoped>

</style>
