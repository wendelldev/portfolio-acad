import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser, fetchPosts } from "../../store/actions";

import CardPostModal from '../Modals/CardPostModal'

import element3 from '../../assets/img/rect3.png'
import element2 from '../../assets/img/rect2.png'
import element1 from '../../assets/img/rect1.png'
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
      <div>
        <div className='banner-intro'>
          <div className='outro'></div>
          <div className='rects'>
            <img className='rect3' src={element3} alt='ele3'/>
            <img className='rect2' src={element2} alt='ele2'/>
            <img className='rect1' src={element1} alt='ele1'/>
          </div>
        </div>
        <div className='title-grid'>
          <div className='line'></div>
          <h2>DIÁRIO DE CLASSE</h2>
          <div className='line'></div>
        </div>
        <section className='grid-posts'>
          <ul className='posts'>
            {posts.map(post => 
              <li key={post.id}><CardPostModal post={post} /></li>
            )}
          </ul>
        </section>
      </div>
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