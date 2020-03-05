import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header'
import configureStore from './store/configureStore'

import axios from 'axios'

axios.defaults.baseURL = 'https://portfolio-acad.firebaseio.com/'

const store = configureStore()

function App () {
    return (
            <Router>
                <Provider store={store}>
                    <>
                        <Header />
                        <Routes />
                    </>
                </Provider>
            </Router>
    )
}

export default App