//使用vue自定义插件方法的请求方法
//请求相关的方法
import axios from 'axios'
//导入nprogress加载进度条
import NProgress from 'nprogress'
import 'nprogress'

var instance = axios.create({
  baseURL: 'http://bingjs.com:83',
  timeout: 30000,
});

//创建一个get请求
let get = function (url, params) {
  return instance.get(url, { params })
}

//创建一个post请求
let post = function (url, params) {
  return instance.post(url, params)
}

//添加请求拦截器
instence.interceptors.request.use(config => {
  //开启进度条
  NProgress.start()

  return config;
}, err => {
  //关闭进度条
  NProgress.done()

})
//添加响应拦截器
instence.interceptors.response.use(res => {
  NProgress.done();

  return res;
}, err => {
  //关闭进度条
  NProgress.done();
})

//导出get和post方法
export {
  get, post
}