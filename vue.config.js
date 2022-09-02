const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", //配置要替换的后台接口地址
        changOrigin: true,// 允许跨域
        ws: true, 
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
})
