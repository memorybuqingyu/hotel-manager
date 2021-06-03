//定义一个插件

import { get, post,setToken } from '@/util/network/request1.js'

export default {
  //插件中必须包括一个install方法
  install: function (Vue) {
    //给Vue混入成员
    Vue.mixin({
      methods: {
        // get请求方法
        $get(url, params) {
          return get(url, params)
        },
        $post(url, params) {
          // post请求方法
          return post(url, params)
        },
        $setToken(){
          // 执行该方法就会将浏览器缓存里面的token中的信息保存到axios的请求头中
          setToken()
        }
      }
    })
  }
}