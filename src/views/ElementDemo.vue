<template>
  <div class="element-demo">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div class="radio-box">
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: '1'
      }
    }
  }
</script>

<style lang="less" scoped>
  /*
  样式穿透:外层选择器 /deep/ 内层选择器
  */
  .element-demo /deep/ .el-button.el-button--primary {
    color: deeppink;
  }

  .radio-box /deep/ .el-radio.is-checked .el-radio__inner {
    background: deeppink;
    border-color: deeppink;
    &:hover{
      color: deeppink;
    }
  }
  .radio-box /deep/ .el-radio__label{
    color: #42b983;
  }
</style>
