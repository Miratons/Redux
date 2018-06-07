import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import './Task.css'

class Task extends Component {

    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    render () {
        return (
            <Fragment>
                <td>{this.props.label}</td>
                <td><button onClick={this.handleToggle}>Toggle</button></td>
                <td>
                    <button onClick={this.handleDelete}>Supprimer</button>
                </td>
            </Fragment>
        )
    }

    handleDelete() {
        this.props.delTodo(this.props.index)
    }

    handleToggle() {
        this.props.toggleTodo(this.props.index)
    }
}

Task.propType = {
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}

export default Task