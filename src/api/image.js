import request from 'network/index'

// 获取 Banner
export function fetchBanner() {
  return request({
    url: '/public/image/banner',
    method: 'get'
  })
}

// 获取现任领导
export function fetchIncumbent() {
  return request({
    url: '/public/image/incumbent',
    method: 'get'
  })
}

// 获取校园风光
export function fetchSchoolScenery(page) {
  return request({
    url: '/public/image/school-scenery',
    method: 'get',
    params: page
  })
}

// 获取学校章程
export function fetchSchoolConstitution() {
  return request({
    url: '/public/image/school-constitution',
    method: 'get'
  })
}
