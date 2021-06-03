//请求相关的方法
import axios from 'axios'
//导入nprogress加载进度条
import NProgress from 'nprogress'
import 'nprogress'

export function request(config) {

  //1.创建axios实例
  const instence = axios.create({
    baseURL: 'http://bingjs.com:83',
    timeout: 30000
  })

  //2.axios的发送拦截器
  instence.interceptors.request.use(config => {
    //开启进度条
    NProgress.start()

    return config;
  }, err => {
    //关闭进度条
    NProgress.done()
  })
  //响应拦截器
  instence.interceptors.response.use(res => {
    NProgress.done();

    return res;
  }, err => {
    NProgress.done();

  })

  //3.真正的网络请求
  return instence(config);
}