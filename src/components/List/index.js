import { connect } from 'react-redux'
import List from './presentational'

import { delTodo } from 'store/ducks/todos'

const mapStateToProps = (state) => ({
    values: state.todos.values
})

export default connect(mapStateToProps)(List)