//使用vue自定义插件方法的请求方法
//请求相关的方法
import axios from 'axios'
//导入nprogress加载进度条
import NProgress from 'nprogress'
import 'nprogress'

// 初始化一个axios对象
var instance = axios.create({
  baseURL: 'http://bingjs.com:83',
  timeout: 30000,
});




//创建一个get请求
let get = async function (url, params) {
  let { data } = await instance.get(url, { params })
  return data
}

//创建一个post请求
let post = async function (url, params) {
  let { data } = await instance.post(url, params)
  return data
}

//添加请求拦截器
instance.interceptors.request.use(config => {
  //开启进度条
  NProgress.start()

  return config;
}, err => {
  //关闭进度条
  NProgress.done()

})
//添加响应拦截器
instance.interceptors.response.use(res => {
  NProgress.done();

  return res;
}, err => {
  //关闭进度条
  NProgress.done();
})

// 将token信息保存到请求头的方法 
let setToken = function () {
  instance.defaults.headers.common['token'] = sessionStorage.getItem('token')
}

//导出get和post方法
export {
  get, post, setToken
}