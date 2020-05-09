const chainWebpack = require('webpack-chain')

module.exports = {
  chainWebpack: config => {
    //添加一个loader
    config.module
        .rule('image')
        .test(/\.ico$/)
        .use('url-loader')
        .loader('url-loader')
  }
}
