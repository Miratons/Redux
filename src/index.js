import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from 'store'
import App from 'components/App/App'

import 'style.css'

render (
    <div>
        <header>
            <h1>My TODO</h1>
        </header>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.querySelector('#mount')
)