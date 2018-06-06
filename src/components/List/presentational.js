import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {

    render () {
        var tasks = this.props.values.map((task, i) => {
            return <li key={`item-${i}`} >{task.label}</li>
        })
        return (
            <ul>
                {tasks}
            </ul>
        )
    }
}

List.propType = {
    values: PropTypes.array.isRequired
}

export default List