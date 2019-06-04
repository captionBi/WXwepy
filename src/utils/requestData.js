import wepy from 'wepy'
import URIS from './config'

/**
 * 服务器请求方法
 * @author Domen
 * @param opts 具体参数参见 https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html
 */
export default function(opts) {
  const url = URIS.api
  const token = wepy.getStorageSync('token')

  const header = {
    Authorization: token || ''
  }
  console.log('11111111', opts)
  opts.url = url + opts.url
  return wepy.request(Object.assign({
    url: '/',
    method: 'get',
    header
  }, { ...opts })).then(res => {
    console.log('res', res)
  })
}
