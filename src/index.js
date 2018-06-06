import { createStore, combineReducers } from 'redux'
import * as filters from 'ducks/filters'
import * as todos from 'ducks/todos'

const rootReducer = combineReducers({
    todos: todos.default,
    filters: filters.default
})

const store = createStore(rootReducer)

console.log(store.getState())
store.dispatch(todos.addTodo("Coucou"))
store.dispatch(filters.setFilter("SHOW_COMPLETED"))
console.log(store.getState().todos)