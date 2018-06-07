import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from 'components/Task'

class List extends Component {

    constructor(props) {
        super(props)
        this.checkIsDone = this.checkIsDone.bind(this)
    }

    render () {
        var tasks = this.props.values.map((task, i) => {
            if (this.checkIsDone(task.done)) {
                return (
                    <tr key={`item-${i}`} >
                        <Task index={i} label={task.label} />
                    </tr>
                )
            }
        })
        return (
            <table>
                <tbody>
                    {tasks}
                </tbody>
            </table>
        )
    }

    checkIsDone(done) {
        switch(this.props.filter) {
            case "SHOW_COMPLETED":
                if (done) {
                    return true;
                }
                break;
            
            default:
                return true;
        }
    }
}

List.propType = {
    values: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
}

export default List