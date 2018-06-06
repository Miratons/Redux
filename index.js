const { createStore, combineReducers } = require('redux')

const initial = {
    filter: {
        active: 'SHOW_ALL',
        values: ['SHOW_ALL', 'SHWO_COMPLETED']
    },
    todos : {
        values: [],
        pages: 0
    }
}

const filterReducer = (state = initial.filter, action = {}) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                active: action.filter
            }
            break
        
        default:
            return state
    }
}

const todosReducer = (state = initial.todos, action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                values: state.values.concat({
                    label: action.label,
                    done: false
                })
            }
        
        default:
            return state
    }
}

const rootReducer = combineReducers({todos: todosReducer, filter: filterReducer})
const store = createStore(rootReducer)

const addTodo = {
    type: 'ADD_TODO',
    label: 'Hello World !'
}

const setFilter = {
    type: 'SET_FILTER',
    filter: 'SHOW_COMPLETED'
}

console.log(store.getState())
store.dispatch(addTodo)
store.dispatch(setFilter)
console.log(store.getState())