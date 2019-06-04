// 研发站：
// 图片地址     https://img.jerryf.cn
//   单点登录地址  https://dev.jike-jwt.jerryf.cn
//   B端api地址   https://dev.jike-backend-api.jerryf.cn
//   C端api地址   https://dev.jike-wap-api.jerryf.cn
//
//   测试站
// 图片地址     https://img.jkweixin.net
//   单点登录地址  https://jwt.jkweixin.net
//   B端api地址   https://backend-api.jkweixin.net
//   C端api地址   https://wap-api.jkweixin.net
//
//   正式站
// 图片地址     https://img.jkweixin.com
//   单点登录地址  https://jwt.jkweixin.com
//   B端api地址   https://backend-api.jkweixin.com
//   C端api地址   https://wap-api.jkweixin.com
import wepy from 'wepy'

const env = wepy.$instance.globalData.env
console.log('devdevdevdev', env)
// const extVersion = wepy.$instance.globalData.version

// const version = `/${extVersion || 'v1'}`

/**
 * 研发环境
 * @type {{image: string, login: string, api: string}}
 */
const DEV = {
  image: 'https://back.gytcrm.com',
  webview: 'https://diagram.gytcrm.com',
  login: 'https://back.gytcrm.com',
  api: 'https://back.gytcrm.com',
  envVersion: 'develop'
}

/**
 * 测试环境
 * @type {{image: string, login: string, api: string}}
 */
const TEST = {
  image: 'https://service.gytcrm.com',
  webview: 'https://diagram.gytcrm.com',
  login: 'https://service.gytcrm.com',
  api: 'https://service.gytcrm.com',
  envVersion: 'trial'
}

/**
 * 生产环境 wx.qlogo.cn
 * @type {{image: string, login: string, api: string}}
 */
const PROD = {
  image: 'https://api.gytcrm.com',
  webview: 'https://diagram.gytcrm.com',
  login: 'https://api.gytcrm.com',
  api: 'https://api.gytcrm.com',
  envVersion: 'release'
}

export const URLS = env === 'test' ? TEST : env === 'prod' ? PROD : DEV
// export const URLS = PROD
// trial--体验版   release---正式版  develop---开发版
// export const envVersion = env === 'test' ? 'trial' : env === 'prod' ? 'release' : 'develop'
class URIS {
  constructor() {
    this.image = URLS.image
    this.webview = URLS.webview
    this.login = URLS.login
    this.api = URLS.api
    this.envVersion = URLS.envVersion
  }
}

export default new URIS()
