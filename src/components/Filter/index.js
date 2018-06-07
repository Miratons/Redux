import { connect } from 'react-redux'
import Filter from './presentational'

import { setFilter } from 'store/ducks/filters'

const mapStateToProps = (state) => ({
    options: state.filters.values
})

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter : (filter) => dispatch(setFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)