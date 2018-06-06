import { createStore, combineReducers } from 'redux'
import * as filters from 'store/ducks/filters'
import * as todos from 'store/ducks/todos'

const rootReducer = combineReducers({
    todos: todos.default,
    filters: filters.default
})

const store = createStore(rootReducer)

export default store