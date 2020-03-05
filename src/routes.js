import React from 'react';

import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/Home'
import Login from './components/Login'
import EditPost from './components/EditPost'


function Routes(props) {
  const { isAuthenticated } = props
  return (
    <Switch>
      {isAuthenticated ? <Route path='/edition' component={EditPost} /> : <Route path='/edition' component={Login} /> }
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
    </Switch>
  )
}


function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps)(Routes)
