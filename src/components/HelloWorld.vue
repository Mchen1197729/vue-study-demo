<template>
  <div class="hello">
    <span>{{firstName}}+{{lastName}}={{fullName}}</span>
    <div>
      <button @click="updateFullName">修改fullname的值</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        firstName: 'Kobe',
        lastName: 'Brant'
      }
    },
    methods: {
      updateFullName() {
        this.fullName = this.fullName === 'Lebron--James' ? 'Kobe--Brant' : 'Lebron--James'
      }
    },
    computed: {
      fullName: {
        //计算属性的getter&setter
        get() {
          //getter需要返回一个值
          return this.firstName + '--' + this.lastName
        },
        //setter需要接受一个新的值作为参数
        set(value) {
          //注意：在setter函数中千万不要调用this.fullName='xxx' 这样会造成死循环
          let [firstName, lastName] = value.split('--')
          this.firstName = firstName
          this.lastName = lastName
        }
      }
    }
  }
</script>

<style scoped>

</style>
