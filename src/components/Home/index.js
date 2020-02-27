import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions";

import Header from '../Header'

import './styles.css'


class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  render() {
    const { isLoggingOut, logoutError } = this.props
    return (
      <>
      <Header current='home' />
      <div>
        <h1>This is your app's protected area.</h1>
        <p>Any routes here will also be protected</p>
        <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Is loginOut</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}
export default connect(mapStateToProps)(Home);