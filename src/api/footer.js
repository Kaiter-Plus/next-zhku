import request from 'network/index'

// 获取页脚
export function fetchFooter() {
  return request({
    url: '/public/footer',
    method: 'get'
  })
}
