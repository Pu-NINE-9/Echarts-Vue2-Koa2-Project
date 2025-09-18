const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8999, // 配置项目端口号
    open: true, // 项目启动后自动打开浏览器
  },
  transpileDependencies: true
})
