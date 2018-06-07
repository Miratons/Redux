import React, { Component } from 'react'
import PropTypes from 'prop-types'

import List from 'components/List'
import Form from 'components/Form'
import Filter from 'components/Filter'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <p>Mon app</p>
                <Filter />
                <List />
                <Form />
            </div>
        )
    }
}

export default App