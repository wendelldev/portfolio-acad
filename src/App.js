import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import configureStore from './store/configureStore'

import axios from 'axios'

import './styles.css'

axios.defaults.baseURL = 'https://portfolio-acad.firebaseio.com/'

const store = configureStore()

function App () {
    return (
            <Router>
                <Provider store={store}>
                    <div className='body-root'>
                        <Header />
                        <Routes />
                        <Footer />
                    </div>
                </Provider>
            </Router>
    )
}

export default App