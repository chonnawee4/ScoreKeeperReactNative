import { createStore, combineReducers, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { players } from '../reducers/players'

let reducer = combineReducers({
    players
}) 

let store = createStore(reducer, devToolsEnhancer())

export default store