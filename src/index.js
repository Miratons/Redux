import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from 'store'
import App from 'components/App/App'

render (
    <div>
        <h1>My TODO</h1>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.querySelector('#mount')
)