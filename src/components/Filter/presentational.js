import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Filter extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        let options = this.props.options.map((option, i) => {
            return <option key={`option-${i}`} value={option}>{option}</option>
        })
        return (
            <select id="filter-select" onChange={this.handleChange}>
                {options}
            </select>
        )
    }

    handleChange(e) {
        this.props.setFilter(e.target.value)
    }
}

Filter.propType = {
    options: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired
}

export default Filter