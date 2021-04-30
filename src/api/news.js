import request from 'network/index'

// 获取首页展示的新闻类型（前四个）
export function getHomeNewsCategoies(page) {
  return request({
    url: '/public/news/categories/home',
    method: 'get',
    params: page
  })
}

// 获取所有新闻类型
export function getAllNewsCategoies() {
  return request({
    url: '/public/news/categories/all',
    method: 'get'
  })
}

// 根据类型获取首页展示的新闻标题、时间（前十则）
export function getNews(category, page, showCover, limit) {
  return request({
    url: '/public/news',
    method: 'get',
    params: { category, page, limit, showCover }
  })
}

// 根据 id 获取新闻内容
export function getNewsById(id) {
  return request({
    url: `/public/news/${id}`,
    method: 'get'
  })
}

// 获取学校介绍
export function fetchSchoolIntrodece() {
  return request({
    url: '/public/news/school-introduce',
    method: 'get'
  })
}

// 获取领导关怀
export function fetchLeaderCare() {
  return request({
    url: '/public/news/leader-care',
    method: 'get'
  })
}

// 获取最近更新
export function fetchNewsRecentUpdate() {
  return request({
    url: '/public/news/recent-update',
    method: 'get'
  })
}
