import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './actrions/UserActions'
const Dashboard = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <p>Curret Count: {count}</p>
      <button
        onClick={() => {
          dispatch(increment())
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
