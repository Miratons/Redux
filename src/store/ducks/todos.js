//Actions
export const ADD_TODO = "my-todo/TODOS/ADD_TODO"
export const DEL_TODO = "my-todo/TODOS/DEL_TODO"

// Reducer
const initial = {
    values: [],
    pages: 0
}

export default function reducer (state = initial, action = {}) {
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
            let tab = [].concat(state.values)
            tab.splice(action.index, 1)
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