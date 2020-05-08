const chainWebpack = require('webpack-chain')

module.exports = {
  chainWebpack: config => {
    config.module
        .rule('image')
        .test(/\.ico$/)
        .use('url-loader')
        .loader('url-loader')
  }
}
