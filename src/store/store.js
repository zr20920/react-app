import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as home from './home/reducer'

let store = createStore(
  combineReducers({...home}),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
