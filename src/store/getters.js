export default {
  /*
  * 1.接受state作为第一个参数 返回值作为该getter的值
  *   1.1返回值可以是一个纯粹的对象
  *   1.2返回值还可以是一个函数对象->那么就可以将此getter作为函数来调用
  * 2.还可以接受getters作为第二个参数,此处的getters就是该对象本身
  * */
  oddNumbers(state) {
    return state.numbers.filter(number => number % 2 === 1)
  },
  oddNumbersCount(state, getters) {
    return getters.oddNumbers.length
  },
  //返回值是函数对象
  getTodoById(state) {
    return (id) => {
      return state.todos.find(todo => todo.id = id)
    }
  }
}
