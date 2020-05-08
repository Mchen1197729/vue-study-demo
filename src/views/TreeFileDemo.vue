<template>
  <div>
    <tree-folder :folder="folder"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //folder表示一个目录(Object类型)
        folder: {
          name: '目录A',
          children: [
            //folder.children中的每个对象表示一个文件(没有children属性)或者一个目录(有children属性)
            {name: '文件A1'},
            {name: '文件A2'},
            {name: '文件A3'},
            {
              name: '目录B', children: [
                {name: '文件B1'},
                {name: '文件B2'},
                {name: '文件B3'}
              ]
            },
          ]
        }
      }
    },
    components: {
      'tree-folder': () => import('../components/TreeFolder'),
      'tree-folder-contents': () => import('../components/TreeFolderContent')
    }
  }
</script>

<style lang="less" scoped>

</style>
