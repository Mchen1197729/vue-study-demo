<template>
  <div class="steps-container">
    <div class="step-box">
      <SimpleSteps :step="step" :steps="steps"/>
    </div>
    <div>
      <button @click="nextStep">下一步</button>
    </div>
  </div>
</template>

<script>
  import SimpleSteps from '../components/SimpleSteps'

  const user_dark = require('../images/user_dark_32.png')
  const user_light = require('../images/user_light_32.png')
  const icon_light = require('../images/icon_light_32.png')
  const icon_dark = require('../images/icon_dark_32.png')
  const licence_dark = require('../images/licence_dark_32.png')
  const licence_light = require('../images/licence_light_32.png')
  const done_dark = require('../images/done_dark_32.png')
  const done_light = require('../images/done_light_32.png')
  export default {
    data() {
      return {
        //当前的步骤
        step: 1,
        //步骤条的配置文件
        steps: [
          //title:步骤条中的文字 light:未完成的步骤的图标 dark:已完成&正在进行中的图标
          {title: '第一步', light: user_light, dark: user_dark},
          {title: '第二步', light: licence_light, dark: licence_dark},
          {title: '第三步', light: icon_light, dark: icon_dark},
          {title: '第四步', light: done_light, dark: done_dark},
        ]
      }
    },
    methods: {
      nextStep() {
        this.step = (this.step++) % (this.steps.length) + 1
      }
    },
    components: {
      SimpleSteps
    }
  }
</script>

<style lang="less" scoped>
  .step-box {
    width: 1300px;
    height: 40px;
    margin: 20px auto;
  }
</style>
