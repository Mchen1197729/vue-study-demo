/*
* 用require.context()来批量导入当前目录下的所有组件:/\.vue$/
* */
import Vue from "vue";

const files = require.context('./', false, /\.vue$/)
files.keys().forEach(file => {
  /*
  * 1.此处的file就是每个组件的相对文件名(相对于./contexts目录):
  *   ./ComponentA.vue&./ComponentB.vue&./ComponentC.vue
  * 2.files(file)返回的就是每个组件默认向外暴露的模块
  *   Module类型的对象，有一个default属性
  * */
  //从file得到组件对应的组件名
  const index1 = file.indexOf('.')
  const index2 = file.lastIndexOf('.')
  /*
  * 此时componentName就是：ComponentA&ComponentB&ComponentC
  * */
  const componentName = file.substring(index1 + 2, index2)
  console.log(componentName)
  console.log(files(file))
  // 全局注册组件:Vue.component('组件名',组件默认暴露的对象)
  Vue.component(componentName,
      /*
      * 1.如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，
      * 2.否则回退到使用模块的根。
      * */
      files(file).default || files(file)
  )
})
