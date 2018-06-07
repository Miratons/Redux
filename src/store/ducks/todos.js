//Actions
export const ADD_TODO = "my-todo/TODOS/ADD_TODO"
export const DEL_TODO = "my-todo/TODOS/DEL_TODO"
export const TOGGLE_TODO = "my-todo/TODOS/TOGGLE_TODO"

// Reducer
const initial = {
    values: [],
    pages: 0
}

export default function reducer (state = initial, action = {}) {
    let tab
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                values: state.values.concat({
                    label: action.label,
                    done: false
                })
            }

        case DEL_TODO:
            tab = [].concat(state.values)
            tab.splice(action.index, 1)
            return {
                ...state,
                values: tab
            }

        case TOGGLE_TODO:
            tab = [].concat(state.values)
            tab[action.index].done = !tab[action.index].done
            return {
                ...state,
                values: tab
            }
        
        default:
            return state
    }
}

// Actions creators
export const addTodo = (label) => ({
    type: ADD_TODO,
    label
})

export const delTodo = (index) => ({
    type: DEL_TODO,
    index
})

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index
})