const current = 'dev' // 区分开发环境和生产环境
const profiles = {
  'dev': {
    'baseURL': 'http://192.168.1.109/weixin/',           // 开发环境地址
    'webURL': 'http://192.168.1.109:8080/h5',     // H5域名前缀 
  }
}
const ENV = profiles[current]
module.exports = ENV