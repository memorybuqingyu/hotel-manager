// //定义一个插件

// import { get, post } from '@/plugin/MyPlugin.js'

// export default {
//   //插件中必须包括一个install方法
//   install: function (Vue) {
//     //给Vue混入成员
//     Vue.mixin({
//       methods: {
//         $get(url, params) {
//           return get(url, params)
//         },
//         $post(url, params) {
//           return post(url, params)
//         }
//       }
//     })
//   }
// }