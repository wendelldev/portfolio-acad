import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../../store/actions'
import {
    CardActions, TextField, Button,
    InputAdornment, Typography
} from '@material-ui/core'
import {
    AccountCircle, Lock, LockOutlined, Visibility, VisibilityOff
} from '@material-ui/icons'

import './styles.css'


class Login extends React.Component {
    state = { email: '', password: '', hidden: true }

    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value })
    }

    handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { email, password } = this.state

        dispatch(loginUser(email, password))
    }

    handleHiddenPassword = (e) => {
        e.preventDefault()
        this.setState({ hidden: !this.state.hidden })
    } 

    render() {
        const { loginError, isAuthenticated } = this.props

        if (isAuthenticated) {
            return <Redirect to='/' />
        } else {
            return (
                <div className='container-login'>
                    <div className='card-login'>
                        <LockOutlined className='icon-avatar' />
                        <h2 className='labelLogin' component='h1' variant='h5'>
                            LOGIN
                        </h2>
                        <TextField
                            className='input'
                            id='email-input'
                            label='Email'
                            fullWidth
                            onChange={this.handleEmailChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }} />
                        <TextField
                            className='input'
                            id='password'
                            label='Password'
                            type={this.state.hidden ? 'password' : 'text'}
                            fullWidth
                            onChange={this.handlePasswordChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        {this.state.hidden ? <Visibility className='view-icon' onClick={this.handleHiddenPassword} /> 
                                            : <VisibilityOff className='view-icon' onClick={this.handleHiddenPassword} />}
                                    </InputAdornment>
                                )
                        }} />
                        {loginError && (
                            <Typography component='p' className='errorText'>
                                Incorrect email or password.
                            </Typography>
                        )}
                        <CardActions>
                            <Button
                                type='button'
                                variant='contained'
                                className='submit'
                                onClick={this.handleSubmit}>
                                    Login
                            </Button>
                        </CardActions>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Login)