import {createStore} from 'redux'
import listReducer from '../reducers/list.reducer'

const devTools = window.__REDUX_DEXTOOLS_EXTENSION__ && window.__REDUX_DEXTOOLS_EXTENSION__()

export const store = createStore(listReducer, devTools)

