import React, { Component } from 'react'
import PropTypes from 'prop-types'

import List from 'components/List'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <p>Mon app</p>
                <List />
            </div>
        )
    }
}

export default App