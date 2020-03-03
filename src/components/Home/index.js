import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser, fetchPosts } from "../../store/actions";

import Header from '../Header'
import CardPostModal from '../Modals/CardPostModal'

import './styles.css'


class Home extends Component {

  componentDidMount = () => {
    this.props.onFetchPosts()
  }

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }


  render() {
    const { posts } = this.props
    return (
      <>
      <Header current='home' />
      <div>
        <section className='grid-posts'>
          <ul className='posts'>
            {posts.map(post => 
              <li key={post.id}><CardPostModal post={post} /></li>
            )}
          </ul>
        </section>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    posts: state.auth.posts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Home);