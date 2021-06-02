import md5 from 'js-md5'

//将字符串进行md5加密的方法
export function strToMd5(str) {
  //加密方式 先把字符串加密一下 再反转一下再进行拼接 再进行加密
  return md5(md5(str).split('').reverse().join(''))
}