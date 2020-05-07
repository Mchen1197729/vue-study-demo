<template>
  <!--
      简单的步骤条组件
      1.宽度和高度由使用该组件时外围包裹的div的宽高来确定
  -->
  <div class="simple-steps">
    <div class="step-item" v-for="(item,index) in steps"
         :class="getClassObj(step,index)"
         :key="index">
      <div class="arrow" :class="getClassObj(step,index)"></div>
      <img v-if="step<index+1" :src="item.dark" alt="">
      <img v-else :src="item.light" alt="">
      <span class="title" :class="getClassObj(step,index)">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  /*
  * 心得体会：
  *  1.在less中有很多方便的函数库供我们使用
  *  2.有的时候需要设置某个元素的宽度(无法用css来确定)等于高度(可以用css确定) 那么就需要用到js来实现
  *  2.1虽然css设置的百分数精度不会丢失 但是浏览器渲染这个数值时会将小数直接渲染成整数值 造成精度丢失
  *  2.2有时候如果标签中绑定的类样式的代码逻辑很复杂 可以考虑添加一个方法 该方法返回一个需要绑定的值(对象或者数组)
  * */
  export default {
    mounted() {
      //用js将class=arrow的元素的宽设置为跟高一样
      const arrowList = document.querySelectorAll('.step-item .arrow')
      //console.dir(arrow)
      //不对最后一个步骤做箭头处理
      for (let i = 0; i < arrowList.length - 1; i++) {
        const arrowHeight = arrowList[i].offsetHeight
        //console.dir(arrowList[i])
        arrowList[i].style.width = arrowHeight + 'px'
      }
    },
    //声明接受父组件传递的props
    props: {
      //当前的步数
      step: {
        type: Number,
        default: 0
      },
      //步数的配置数据
      steps: {
        type: Array,
      }
    },
    data() {
      return {}
    },
    methods: {
      getClassObj(step, index) {
        return {doing: step === index + 1, done: step > index + 1, todo: step < index + 1}
      }
    }
  }
</script>

<style lang="less" scoped>
  @todoColor: #D3DDEB;
  @doingColor: #FF8A00;
  @doneColor: #152860;

  .simple-steps {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: @todoColor;

    .step-item {
      position: relative;
      /*直接设置flex：1就可以实现平均分宽度*/
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 5%;
      }

      &.doing {
        background-color: @doingColor;
      }

      &.todo {
        background-color: @todoColor;
      }

      &.done {
        background-color: @doneColor;
      }

      .title {
        &.doing, &.done {
          color: #fff;
        }

        &.todo {
          color: @doneColor;
        }
      }

      .arrow {
        position: absolute;
        z-index: 999;
        right: 0;
        top: 0;
        height: 100%*sqrt(2)/2;
        //background-color: deeppink;
        transform: translateY(100%*(1/2 - sqrt(2)/4.8)) translateX(50%) rotate(45deg);
        transform-origin: 50% 50%;

        &.doing {
          background-color: @doingColor;
        }

        &.todo {
          background-color: @todoColor;
        }

        &.doing {
          background-color: @doingColor;
        }
      }
    }
  }
</style>
