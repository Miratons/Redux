//Actions
export const SET_FILTER = 'my-todo/FILTERS/SET_FILTER'

// Reducer
const initial = {
    active: 'SHOW_ALL',
    values: ['SHOW_ALL', 'SHOW_COMPLETED']
}

export default function reducer (state = initial, action = {}) {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                active: action.filter
            }
            break
        
        default:
            return state
    }
}

// Actions creators
export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})