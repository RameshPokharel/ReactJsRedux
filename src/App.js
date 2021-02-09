import { createStore, combineReducers } from 'redux'
import { increment, decrement } from './actrions/UserActions.js'
import loggedReducer from './reducer/loggedReducer.js'
import countReducer from './reducer/couter.js'
import { Provider } from 'react-redux'
import Dashboard from './dashboard.js'
//create Store
let allReducer = combineReducers({
  count: countReducer,
  isLogged: loggedReducer,
})

let store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//dispatch

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())

console.log(store.getState())
function App() {
  return (
    <Provider store={store}>
      <div>hello</div>
      <Dashboard />
    </Provider>
  )
}

export default App
