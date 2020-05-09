import {SYNC_ACTION} from './mutation-types'
/*
* 每一个action函数接受一个与store具有相同属性的context对象,但是此对象并不是store对象本身
* 因此可以在action函数中调用context.commit(),context.dispatch(),context.state,context.getters
* 可以利用解构赋值的语法:{dispatch,commit,state,getters}
* */
export default {
  clickButton({commit}) {
    //返回一个状态明确发生改变的Promise实例 这样在可以在组件中调用then()方法进行回调处理
    return new Promise((resolve, reject) => {
      //此处编写异步任务,根据异步任务的结果来改变Promise的状态 成功or失败
      setTimeout(() => {
        const value = 'Hello World'
        commit(SYNC_ACTION, value)
        resolve()
      }, 1000)
    })
  }
}
