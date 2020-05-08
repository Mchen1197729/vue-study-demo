# vue-study-demo 此项目用于记录一些关于vue的细节点

### 1.**为什么自定义组件的data是一个函数而不是一个对象**
>1.自定义组件也是一个vue实例，也有生命周期钩子函数、data、methods、computed之类的选项
   但是el选项只有根组件的vue实例才有
>2.自定义组件是可以重复使用的，但是必须满足一条原则：重复使用的同一个组件不能互相产生干扰
   2.1如果data选项是一个对象的话，那么重复使用的同一个自定义组件之间的数据就会被共享，则组件之间会互相影响
   2.2但是data如果是一个函数，返回一个对象，那么重复使用的同一个自定义组件就不会发生数据共享的情况，
      因为组件每次被创建出来就会执行一次data函数，返回一个对象的拷贝，因此每个自定义组件内部维护的都是组件自己的数据，
      所以不管一个自定义组件被重复使用了多少次，它们之间都不会互相影响。

>3.一定意义上可以将data也理解成一个生命周期钩子函数，触发的顺序：
    beforeCreate()->data()->created()->beforeMount()->mounted()->...


### 2.**关于插槽slot的使用**
>1.slot插槽一般在自定义组件中使用，用来表示某些内容的占位符
    1.1在自定义组件中使用name="xxx"来给slot命名
>2.当自定义组件被父组件使用时，父组件可以传递一些内容来将填充自定义组件中的slot的区域
   使用template标签来给slot添加内容，使用#xxx来表示填充的位置
```vue
//自定义子组件
<template>
  <header>
     <slot name="header"/>
  </header>
  <main>
     <slot name="default"/>
  </main>
  <footer>
     <slot name="footer"/>
  </footer>
</template>
```
```vue
//父组件
<Sub-Component>
  <template #header>
    这里的内容会填充子组件的#header位置
  </template>
  <template #default>
    这里的内容会填充子组件的#default位置
  </template>
  <template #footer>
    这里的内容会填充子组件的#footer位置
  </template>
</Sub-Component>
```

### 3.**注册同步组件与异步组件**
>1.同步组件会在根实例创建的时候就一起创建，比较消耗资源

>2.异步组件只会在该组件被激活时才创建，可以减少资源消耗

>3.注册同步全局组件：Vue.component('组件名',组件默认导出的对象)
   注册同步局部组件：components:{组件名1:组件对象1,...}

>4.注册异步全局组件：Vue.component('组件名‘,()=>{return 组件默认导出的对象})
   注册异步局部组件：components:{组件名1:()=>{return 组件对象1},...}

>5.处理异步组件的加载状态
```js
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

### 4.**关于Vue中的依赖注入**
>1.依赖注入可以用来解决后代组件使用父级或祖先级别的组件中的数据
>2.使用方式：
```js
//父组件
export default{
  provide(){
    return {
      super_name:'父组件的名称',
      super_show(){
        console.log('I am 父组件')
      }
    } 
  }
}
//子组件
export default{
  inject:['super_name','super_show'],
  methods:{
    m1(){
      //使用父组件注入的数据
      console.log(this.super_name)
      this.super_show()
    } 
  }
}
```
