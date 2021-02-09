import { dispatch } from 'redux'
import { increment } from '../actrions/UserActions'
export const incrementWithThunk = () => async (dispatch, getState) => {
  const counter = getState().counter
  var promise = new Promise((resolve, reject) => {
    let c = counter + 1

    resolve(c)
  })

  let countValue = await promise
  dispatch(increment(countValue))
}
