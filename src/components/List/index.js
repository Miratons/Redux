import { connect } from 'react-redux'
import List from './presentational'

import { delTodo } from 'store/ducks/todos'

const mapStateToProps = (state) => ({
    values: state.todos.values,
    filter: state.filters.active
})

export default connect(mapStateToProps)(List)