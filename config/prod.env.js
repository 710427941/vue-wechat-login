'use strict'
//npm 提供一个npm_lifecycle_event变量，返回当前正在运行的脚本名称，比如pretest、test、posttest等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的npm scripts命令编写代码。
const target = process.env.npm_lifecycle_event
let obj

switch (target) {
  //测试版本
  case 'test':
    obj = {
      NODE_ENV: '"production"',
      WECHAT_APPID: '"wx123123123"',//测试微信appid
      API_URL: '"https://www.test.com"',//测试接口地址
    }
    break
  //正式版本
  case 'build':
    obj = {
      NODE_ENV: '"production"',
      WECHAT_APPID: '"wx123123123"',//正式微信appid
      API_URL: '"https://www.test.com"',//正式接口地址
    }
}

module.exports = obj
