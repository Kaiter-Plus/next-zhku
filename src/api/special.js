import request from 'network/index'

// 获取首页展示的专题类型（前四个）
export function getHomeSpecialCategoies(page) {
  return request({
    url: '/public/special/categories/home',
    method: 'get',
    params: page
  })
}

// 获取所有专题类型
export function getAllSpecialCategoies() {
  return request({
    url: '/public/special/categories/all',
    method: 'get'
  })
}

// 根据类型获取首页展示的专题标题、时间（前四则）
export function getHomeSpecial(category) {
  return request({
    url: '/public/special/home',
    method: 'get',
    params: { category }
  })
}

// 根据 id 获取专题内容
export function getSpecialById(id) {
  return request({
    url: `/public/special/${id}`,
    method: 'get'
  })
}

// 获取最近更新
export function fetchSpecialRecentUpdate() {
  return request({
    url: '/public/special/recent-update',
    method: 'get'
  })
}
