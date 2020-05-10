const chainWebpack = require('webpack-chain')

module.exports = {
  //打包项目时需要将publicPath设置为'./'
  publicPath: './',
  chainWebpack: config => {
    //添加一个loader
    config.module
        .rule('image')
        .test(/\.ico$/)
        .use('url-loader')
        .loader('url-loader')
  }
}
