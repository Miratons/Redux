import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from 'components/Task'

class List extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        var tasks = this.props.values.map((task, i) => {
            return (
                <tr key={`item-${i}`} >
                    <Task index={i} label={task.label} />
                </tr>
            )
        })
        return (
            <table>
                <tbody>
                    {tasks}
                </tbody>
            </table>
        )
    }
}

List.propType = {
    values: PropTypes.array.isRequired
}

export default List