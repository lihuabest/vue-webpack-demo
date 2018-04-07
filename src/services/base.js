import axios from 'axios'
import qs from 'qs'

const Axios = axios.create({
  baseURL: '',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 请求 拦截器设置
Axios.interceptors.request.use(config => {
  if (config.method === 'post' || config.method === 'get' || config.method === 'delete') {
    // 序列化参数
    config.data = qs.stringify(config.data)
  }
  if (localStorage.token) {
    // 鉴权
    config.headers.Authorization = localStorage.token
  }

  return config
})

// 响应 拦截器
Axios.interceptors.response.use(res => {
  if (res.data) {
    // 根据返回类型做拦截处理
    // console.log(res.data)
    return res.data
  }

  return res
}, err => {
  // 错误处理
  console.log(err)
})

export default Axios
