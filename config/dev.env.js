'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WECHAT_APPID: '"wx123123123"',//测试微信appid
  API_URL: '"https://www.test.com"',//测试接口地址
})
