// 请求模块
import axios from 'axios'

// 响应条js和css
import NProgress from 'nprogress'
// 所有请求的实例
const request = axios.create({
  baseURL: 'https://rest.apizza.net/'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 显示进度条
  NProgress.start()
  return config
}, function (error) {
  console.log(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 隐藏进度条
  NProgress.done()
  return response
}, function (error) {
  console.log(error)
})
export default request
