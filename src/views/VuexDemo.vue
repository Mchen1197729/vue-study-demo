<template>
  <div class="vuex-demo">
    <h3>{{counter}}</h3>
    <h2>{{username}}</h2>
    <h2>{{mergeWithLocal}}</h2>
    <h2>{{password}}</h2>
    <ul>
      <li v-for="(odd,index) in oddNumbers" :key="index">{{odd}}</li>
    </ul>
    <h1>{{oddNumbersCount}}</h1>
    <hr>
    <p>{{todoItem.id}}--{{todoItem.title}}--{{todoItem.completed}}</p>
    <button @click="clickButton">按钮</button>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        name: '波多野结衣--'
      }
    },
    methods: {
      clickButton() {
        /*
        *处理异步action的Promise返回值
        * 1.this.$store.dispatch()返回的是Promise对象
        * 2.此写法需要clickButton这个action返回一个状态发生改变的Promise实例
        * */
        this.$store.dispatch('clickButton')
            .then(() => {
              console.log('action success')
            })
            .catch(err => {
              console.error(err)
            })
      }
    },
    /*
    * Vuex中的state是响应式的 所以最好将state中的数据声明为组件的计算属性
    * */
    computed: {
      counter() {
        return this.$store.state.counter
      },
      //mapState方法接受一个对象作为参数 返回一个对象最为返回值
      ...mapState({
        //1.使用箭头函数的形式是最简单的 但是无法使用组件自身的this引用
        username: state => state.username,
        //2.如果想使用组件自身的this引用 必须写成普通的方法模式
        mergeWithLocal(state) {
          return this.name + state.username
        }
      }),
      //mapState函数是可以调用不止一次的
      //传入一个数组:说明该计算属性的值是password,state中的属性也是password
      ...mapState(['password']),
      ...mapGetters(['oddNumbers', 'oddNumbersCount']),
      todoItem() {
        return this.$store.getters.getTodoById(2)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
