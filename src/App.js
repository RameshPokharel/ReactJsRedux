import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import React from 'react'
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)))

//dispatch

console.log(store.getState())
class AppClass extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>hello</div>
        <Dashboard />
      </Provider>
    )
  }
}

export default AppClass
