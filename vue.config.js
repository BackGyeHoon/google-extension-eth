const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: 'https://games.crossfit.com/competitions/api/v1/competitions/open/2022',
  }
})
