import wepy from 'wepy'

/**
 * 提示错误信息
 * @author Domen
 * @param msg
 * @param title
 */
export function showErrMsg (msg, title = '提醒') {
  wepy.showModal({
    title: title,
    content: msg,
    showCancel: false,
    confirmColor: '#FF3333'
  })
}

/**
 * 提示正确信息
 * @author Domen
 * @param msg
 * @param title
 */
export function showSuccessMsg (msg, title = '提示') {
  wepy.showModal({
    title: title,
    content: msg,
    showCancel: false
  })
}
