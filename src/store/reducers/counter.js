import { handleActions } from 'redux-actions'
import { ASYNC_INCREMENT, DECREMENT } from '../types/counter'

const initdata = {
  asyncNum: 0,
  stringNum: '123'
}
export default handleActions({
  [ASYNC_INCREMENT] (state, data) {
    return {
      ...state,
      asyncNum: data.payload
    }
  },
  [DECREMENT] (state, data) {
    return {
      ...state,
      stringNum: data.payload
    }
  }
}, initdata)
