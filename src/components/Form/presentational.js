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
                <input type="text" onChange={this.handleChange} />
                <button>Add TODO</button>
            </form>
        )
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(e) {
        this.props.addTodo(this.state.value)
        this.setState({
            value: ''
        })
        e.preventDefault();
        e.stopPropagation();
    }
}

export default Form