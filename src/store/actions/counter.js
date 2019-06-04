import { ASYNC_INCREMENT, DECREMENT } from '../types/counter'
import { createAction } from 'redux-actions'
// import requestData from '../../utils/requestData'

export const getStaffRankList = createAction(ASYNC_INCREMENT, (q) => {
  console.log('redux', q)
  // return requestData({
  //   url: '/theMobileTerminal/staffSort',
  //   method: 'post',
  //   data: {
  //     q: q.q
  //   }
  // }).then(res => {
  //   return res
  // })
  return 'res'
})

export const testdata = createAction(DECREMENT, (q) => {
  console.log('redux', q)
  return '456'
})
