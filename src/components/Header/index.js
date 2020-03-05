import React from 'react'
import { Link } from 'react-router-dom'
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
                    <h2 className="logo-name">Wendell Lucena</h2>
                </div>
                <div className="nav-area">
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/diary'>Diário</Link>
                    <Link className='link' to='/about'>Sobre</Link>
                    <Link className='link' to='/edition'>Edição</Link>
                    {isAuthenticated ? <Link className='btn-logout' to='/login' onClick={this.handleLogout}>Logout</Link> : <Link className='btn-login' to='/login'>Login</Link>}
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