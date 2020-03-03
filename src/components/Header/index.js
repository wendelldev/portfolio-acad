import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './styles.css'


class Header extends React.Component {
    render() {
        const {isAuthenticated, current} = this.props
        return (
            <header className="header">
                <div className="logo-area">
                    <h2 className="logo-name">Wendell Lucena</h2>
                </div>
                <div className="nav-area">
                    {current === 'home' ? <Link className='link link-active' to='/'>Home</Link> : <Link className='link' to='/'>Home</Link>}
                    {current === 'diary' ? <Link className='link link-active' to='/diary'>Diário</Link> : <Link className='link' to='/diary'>Diário</Link>}
                    {current === 'about' ? <Link className='link link-active' to='/about'>Sobre</Link> : <Link className='link' to='/about'>Sobre</Link>}
                    {isAuthenticated ?  current === 'edition' ? <Link className='link link-active' to='/edition'>Edição</Link> : <Link className='link' to='/edition'>Edição</Link>
                        : console.log('nada')}
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