import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import moduleUser from './modules/moduleUser'
import moduleTodo from './modules/moduleTodo'

Vue.use(Vuex)

//为store添加插件:Vuex插件就是一个函数,它接收 store 作为唯一参数
const myPlugin = store => {
  // 当 store 初始化后调用
  console.log('store init()')
  store.subscribe((mutation, state) => {
    // 每次mutation函数执行完以后调用
    // mutation 的格式为 { type, payload }
    console.log('store.subscribe()')
  })
}

export default new Vuex.Store({
  plugins: [myPlugin],
  //根级别的state
  state, actions, mutations, getters,
  //模块级别的state
  modules: {
    moduleTodo, moduleUser
  }
})
