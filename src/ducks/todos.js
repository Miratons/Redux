//Actions
export const ADD_TODO = "my-todo/TODOS/ADD_TODO"

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
        
        default:
            return state
    }
}

// Actions creators
export const addTodo = (label) => ({
    type: ADD_TODO,
    label
})