import { dispatch } from 'redux'
import { increment, SignIn } from '../actrions/UserActions'
export const incrementWithThunk = () => async (dispatch, getState) => {
  dispatch(SignIn(true))
  const counter = getState().counter
  var promise = new Promise((resolve, reject) => {
    let c = counter + 1

    resolve(c)
  })

  let countValue = await promise
  dispatch(increment(countValue))
}
