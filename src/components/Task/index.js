import { connect } from 'react-redux'
import Task from './presentational'

import { delTodo } from 'store/ducks/todos'

const mapDispatchToProps = (dispatch, props) => {
    return {
      delTodo : (index) => dispatch(delTodo(index))
    }
}

export default connect(() => ({}), mapDispatchToProps)(Task)