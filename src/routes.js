import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import configureStore from './store/configureStore'

import axios from 'axios'

axios.defaults.baseURL = 'https://portfolio-acad.firebaseio.com/'

const store = configureStore()

function Root () {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}

export default Root