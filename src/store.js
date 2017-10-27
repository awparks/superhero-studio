import { createStore } from 'redux'
import superheroBuilder from './reducers'
import { setHead, setBody } from './actions'

let store = createStore(superheroBuilder)

console.log(store.getState())