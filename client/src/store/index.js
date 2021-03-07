import { applyMiddleware, combineReducers, createStore } from 'redux'
import application from './reducers/applicationReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  application
})

export const store = createStore(reducer, applyMiddleware(thunk))
