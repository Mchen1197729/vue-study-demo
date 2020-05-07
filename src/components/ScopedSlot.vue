<template>
  <!--
      关于作用域插槽的一些使用
      1.为slot标签命名时，最好使用name="xxx"的方式，因为其他方式可能会出问题(不知道以后的版本会不会改进)
      2.自定义的组件中的插槽可以通过bind属性的方式给使用它的父组件传递数据
          eg:<slot name="user" :student="student" :teacher="teacher"></slot>
          然后父组件中的template可以通过解构赋值的方式来获取子组件传递的数据
          eg:<template #user="{student,teacher}">{{student.xxx}}--{{teacher.yyy}}</template>
  -->
  <div class="scoped-slot">
    <h1>
      <slot name="default" :user="user" :student="student">这是default插槽--{{user.firstName}}--{{student.name}}</slot>
      <br>
      <slot name="user" :user="user">这是user插槽--{{user.firstName}}</slot>
      <br>
      <slot name="student" :student="student">这是student插槽--{{student.name}}</slot>
    </h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          firstName: 'Kobe',
          lastName: 'Brant'
        },
        student: {
          name: '林志玲',
          age: 27
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
