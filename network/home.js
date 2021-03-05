const request = require('./index.js')
const cheerio = require('cheerio')
const crypto = require('crypto')

const url = 'https://www.zhku.edu.cn/'
const home = {}

module.exports = () => {
  return new Promise((resolve, reject) => {
    request(url)
      .then(res => {
        const $ = cheerio.load(res)
        getNavMenu($)
        getImages($)
        resolve(home)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

// 获取轮播图地址
function getImages($) {
  // 存放图片数组
  home.images = []
  const imgs = Array.from($('.bd img'))
  for (const index in imgs) {
    const md5 = crypto.createHash('md5')
    const image = {}
    image.id = md5.update(new Date().getTime() + '' + index).digest('hex')
    image.alt = $(imgs[index]).attr('src').split('/')[1]
    image.src = url + $(imgs[index]).attr('src')
    home.images.push(image)
  }
}

// 获取导航栏菜单
function getNavMenu($) {
  // 存放图片数组
  home.navItems = []
  const items = Array.from($('.mainnav li>a'))
  for (const index in items) {
    const md5 = crypto.createHash('md5')
    const item = {}
    item.id = md5.update(new Date().getTime() + '' + index).digest('hex')
    item.text = $(items[index]).text()
    home.navItems.push(item)
  }
}
