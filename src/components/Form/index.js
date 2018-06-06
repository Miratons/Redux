import { connect } from 'react-redux'

import Form from './presentational'
import { addTodo } from 'store/ducks/todos'

const mapDispatchToProps = (dispatch, props) => {
    return {
      addTodo : (label) => dispatch(addTodo(label))
    }
}

export default connect(() => ({}), mapDispatchToProps)(Form)