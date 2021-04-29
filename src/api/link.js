import request from 'network/index'

// 获取链接类型
export function fetchLinkCategories() {
  return request({
    url: '/public/link/categories',
    method: 'get'
  })
}

// 获取每个类别下的链接项目
export function fetchLinks(category) {
  return request({
    url: '/public/links',
    method: 'get',
    params: { category }
  })
}
