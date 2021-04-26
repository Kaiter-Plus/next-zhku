import axios from 'axios'

export default function request(config) {
  // 创建 axios 实例
  const instance = axios.create({
    // 发布使用
    // baseURL: 'http://121.37.230.214',
    // 本地测试使用
    baseURL: 'http://localhost:8888',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
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
      throw error
    }
  )

  // 3. 发送网络请求
  return instance(config)
}
