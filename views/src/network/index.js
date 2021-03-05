import axios from 'axios'

export default function request(config) {
  // 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://localhost',
    timeout: 5000
  })

  // axios 拦截器
  instance.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return error
    }
  )
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    error => {
      throw error.response.status
    }
  )

  // 3. 发送网络请求
  return instance(config)
}
