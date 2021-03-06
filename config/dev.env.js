'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
 NODE_ENV: '"development"',
  BASE_API: '"https://www.easy-mock.com/mock/5af3ea667098da01bd921f7f/webapi"',
  TEST_API:'"http://192.168.17.248:8080/dev"'
})

