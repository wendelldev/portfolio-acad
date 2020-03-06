import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions'

import './styles.css'


class Header extends React.Component {

    handleLogout = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        
        dispatch(logoutUser())
    }

    render() {
        const {isAuthenticated} = this.props
        return (
            <header className="header">
                <div className="logo-area">
                    <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/portfolio-acad.appspot.com/o/logo4x.png?alt=media&token=c7e7f99a-382f-4823-888e-20ba4e89268d" alt='logo' />
                    <h2 className="logo-name">WENDELL LUCENA</h2>
                </div>
                <div className="nav-area">
                    <NavLink exact={true} className='link' activeClassName='active' to='/'>HOME</NavLink>
                    <NavLink className='link' activeClassName='active' to='/diary'>DIÁRIO</NavLink>
                    <NavLink className='link' activeClassName='active' to='/about'>SOBRE</NavLink>
                    {isAuthenticated ? <NavLink className='link' activeClassName='active' to='/edition'>EDIÇÃO</NavLink> : console.log('')}
                    {isAuthenticated ? <Link className='btn-logout' to='/login' onClick={this.handleLogout}>LOGOUT</Link> : <Link className='btn-login' to='/login'>LOGIN</Link>}
                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Header)