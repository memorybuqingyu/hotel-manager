import { request } from './request'

// export function setToken() {
//   //将token加入请求头中
//   request('').instence.defaults.Headers.common['token'] = sessionStorage.getItem('token');
// }

//发送登录请求
export function getLogin(loginId, loginPwd) {
  return request({
    url: '/Admin/Login',
    method: 'get',
    Headers: {},
    params: {
      loginId,
      loginPwd,
    }
  })
}