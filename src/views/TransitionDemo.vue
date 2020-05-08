<template>
  <div class="transition-demo">
    <transition name="h2">
      <h2 v-show="isShow">This is My Home!</h2>
    </transition>
    <hr>
    <div>
      <button @click="toggleShow">过渡</button>
    </div>
    <transition name="h3">
      <h3 v-show="isAnimate">This is My Home!</h3>
    </transition>
    <hr>
    <div>
      <button @click="toggleAnimate">动画</button>
    </div>
  </div>
</template>

<script>
  /*
  * 离开&进入过度效果：
  * 1.v-enter:开始进入->v-enter-active:正在进入->v-enter-to:完全进入
  * 2.v-leave:开始离开->v-leave-active:正在离开->v-leave-to:完全离开
  * 3.在v-enter-active&v-leave-active这段时间设置transition属性
  * 4.在v-enter&v-leave-to这两个时间点设置opacity:0
  * */
  export default {
    //如果该组件被用在keep-alive组件中 当该组件被激活时此生命周期函数被调用
    activated() {
      console.log('TransitionDemo activated()')
    },
    //如果该组件被用在keep-alive组件中 当该组件被缓存时此生命周期函数被调用
    deactivated() {
      console.log('TransitionDemo deactivated()')
    },
    data() {
      return {
        isShow: true,
        isAnimate: true
      }
    },
    methods: {
      toggleShow() {
        this.isShow = !this.isShow
      },
      toggleAnimate() {
        this.isAnimate = !this.isAnimate
      }
    },
    watch: {
      isShow: {
        handler(newVal, oldVal) {
          console.log(newVal)
        },
        /*
        * 1.immediate:true 那么上面定义的handler处理函数会在该组件创建后立刻调用一次
        * 2.immediate:false 那么上面定义的handler处理函数只会在被侦听的值发生改变以后调用
        * */
        immediate: true
      }
    }
  }
</script>

<style lang="less" scoped>
  .transition-demo {
    //正在进入&正在离开(一段时间)
    .h2-enter-active, .h2-leave-active {
      transition: all 2s;
    }

    //开始进入&完全离开(时间点)
    .h2-enter, .h2-leave-to {
      opacity: 0;
      color: #42b983;
      transform: translateY(400px) rotateX(360deg);
    }

    /****************************动画*****************************8*/

    .h3-enter-active {
      animation: bounce-in .5s;
    }

    .h3-leave-active {
      animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(3.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }
</style>
