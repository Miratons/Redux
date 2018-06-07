import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            value: ''
        }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Add TODO</button>
            </form>
        )
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(e) {
        // check todo is not null
        if (this.state.value.trim() !== '') {
            this.props.addTodo(this.state.value)
            this.setState({
                value: ''
            })
        }
        e.preventDefault();
        e.stopPropagation();
    }
}

export default Form