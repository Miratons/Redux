import { connect } from 'react-redux'
import List from './presentational'

const mapStateToProps = (state) => ({
    values: state.todos.values
})

export default connect(mapStateToProps)(List)