import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  increment,
  decrement,
  IncrementFromThunk,
} from './actrions/UserActions.js'
import loggedReducer from './reducer/loggedReducer.js'
import countReducer from './reducer/couter.js'
import { Provider } from 'react-redux'
import Dashboard from './dashboard.js'
import thunk from 'redux-thunk'
//create Store
let allReducer = combineReducers({
  count: countReducer,
  isLogged: loggedReducer,
})

let store = createStore(
  allReducer,
  applyMiddleware(
    thunk
  ) /* 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
)

//dispatch

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
