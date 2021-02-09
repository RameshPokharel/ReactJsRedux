import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  IncrementFromThunk,
} from './actrions/UserActions'
import { incrementWithThunk } from './thunk/MyThunk.js'

const Dashboard = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <p>Curret Count: {count}</p>
      <button
        onClick={() => {
          dispatch(incrementWithThunk())
          //dispatch(increment())
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
    </>
  )
}
export default Dashboard
