import { connect } from 'react-redux'
import Task from './presentational'

import { delTodo, toggleTodo } from 'store/ducks/todos'

const mapDispatchToProps = (dispatch, props) => {
    return {
      delTodo : (index) => dispatch(delTodo(index)),
      toggleTodo : (index) => dispatch(toggleTodo(index))
    }
}

export default connect(() => ({}), mapDispatchToProps)(Task)