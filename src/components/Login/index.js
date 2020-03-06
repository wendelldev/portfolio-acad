import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../../store/actions'
import {
    Card, CardContent, CardActions, TextField, Button, Avatar,
    InputAdornment, withStyles, Typography, Container
} from '@material-ui/core'
import {
    AccountCircle, Lock, LockOutlined, Visibility, VisibilityOff
} from '@material-ui/icons'


const styles = () => ({
    '@global': {
        body: {
            backgroundImage: "url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat-y',
        }
    },
    container: {
        display: 'flex',
        marginTop: 180,
        justifyContent: 'center'
    },
    card: {
        maxWidth: 300,
        display: 'flex',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#00bfff'
    },
    labelLogin: {
        marginBottom: 5,
        marginTop: 5,
        textAlign: 'center',
        'font-family': "'Roboto', sans-serif",
        'font-size': 18
    },
    input: {
        marginBottom: 20,
        heigth: 30,
    },
    errorText: {
        color: '#f50057',
        marginBottom: 5,
        textAlign: 'center'
    },
    submit: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff',
        backgroundColor: '#00bfff',
        '&:hover': {
            backgroundColor: '#1e90ff'
        }
    },
    icon: {
        '&:hover': {
            cursor: 'pointer'
        }
    }


})


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
        const { classes, loginError, isAuthenticated } = this.props

        if (isAuthenticated) {
            return <Redirect to='/' />
        } else {
            return (
                <Container className={classes.container}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Avatar className={classes.avatar}>
                                <LockOutlined />
                            </Avatar>
                            <Typography className={classes.labelLogin} component='h1' variant='h5'>
                                LOGIN
                            </Typography>
                            <TextField
                                className={classes.input}
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
                                className={classes.input}
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
                                            {this.state.hidden ? <Visibility className={classes.icon} onClick={this.handleHiddenPassword} /> 
                                                : <VisibilityOff className={classes.icon} onClick={this.handleHiddenPassword} />}
                                        </InputAdornment>
                                    )
                                }} />
                                {loginError && (
                                    <Typography component='p' className={classes.errorText}>
                                        Incorrect email or password.
                                    </Typography>
                                )}
                                <CardActions>
                                    <Button
                                        type='button'
                                        variant='contained'
                                        className={classes.submit}
                                        onClick={this.handleSubmit}>
                                            Login
                                    </Button>
                                </CardActions>
                        </CardContent>
                    </Card>
                </Container>
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

export default withStyles(styles)(connect(mapStateToProps)(Login))