<template>
  <!-- 展示计算属性的页面 -->
  <div class="watch-property">
    <h1>This is a page about watch-property</h1>
    <hr>
    <h2>Ask a yes/no question</h2>
    <input type="text" v-model="question">
    <br>
    <span>{{answer}}</span>
    <div>
      <button @click="sayHi">sayHi</button>
    </div>
  </div>
</template>

<script>
  /*
  * 总结心得：
  * 1.在Vue中，并不是所有的方法都必须要声明在methods中的 有时候可以将方法声明在data或者生命周期钩子函数中(有时候会更简洁)
  *
  * 2.在侦听器的处理函数中，有时候不需要使用处理函数的形参：newValue和oldValue
  *   因为侦听的值一般都是data中的属性，所以此时此刻的data.property就是形参中newValue的值
  *
  * */
  export default {
    name: 'WatchProperty',
    data() {
      return {
        question: '',
        answer: 'I cannot give you an answer util you ask a question!',
        //将一些特殊的方法声明在data中也是可以的
        debounceAsk: this.debounce(this.ask, 500),
        sayHi: () => {
          console.log('hello')
        }
      }
    },
    //将一些特殊的方法声明在生命周期钩子函数中也是可以的
    created() {
      //使用自己定义的debounce函数(也是可行的)
      //this.debounceAsk = this.debounce(this.ask, 500)
      //使用lodash工具库
      //this.debounceAsk = this.$lodash.debounce(this.ask, 500)
    },
    methods: {
      //通用的防抖函数
      debounce(fn, delay) {
        let timer = null
        return (...args) => {
          clearTimeout(timer)
          timer = setTimeout(() => {
            fn.apply(this, args)
          }, delay)
        }
      },
      //方法不可以这样声明 如果需要声明成下面这种格式 那么请将声明放在生命周期钩子函数中
      //debounceAsk: this.debounce(this.ask, 500),
      ask() {
        //console.log(this.question.endsWith('?'))
        //判断this.question是否以?或者？结尾
        if (!this.question.endsWith('?') && !this.question.endsWith('？')) {
          return this.answer = 'A question always ends with a ? or ？'
        }
        this.answer = 'I am thinking...'
        this.$axios.get('https://yesno.wtf/api')
            .then(response => {
              this.answer = response.data.answer.toUpperCase()
            })
            .catch(error => {
              console.log(error)
            })
      }
    },
    watch: {
      question(newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing'
        this.debounceAsk()
      }
    }
  }
</script>
