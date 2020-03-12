import { myFirebase } from '../firebase/firebase'
import axios from 'axios'


export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"
export const VERIFY_REQUEST = "VERIFY_REQUEST"
export const VERIFY_SUCCESS = "VERIFY_SUCCESS"
export const SET_POSTS = "SET_POSTS"
export const CREATING_POST = "CREATING_POST"
export const POST_CREATED = "POST_CREATED"



// Login actions
const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    }
}

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    }
}

// Logout Actions
const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    }
}

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    }
}

const verifySucess = () => {
    return {
        type: VERIFY_SUCCESS
    }
}


const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => console.log(err))
            .then(res => {
                try {
                    const rawPosts = res.data
                    const posts = []
                    for (let key in rawPosts) {
                        posts.push({
                            ...rawPosts[key],
                            id: key
                        })
                    }

                    dispatch(setPosts(posts.reverse()))
                    } catch(err) {
                        console.log(err)
                    }
            })
    }
}


export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin())
    myFirebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user))
        })
        .catch(error => {
            // Pensar em algo caso ocorra erro
            console.log('Erro login ' + error)
            dispatch(loginError())
        })
}

export const logoutUser = () => dispatch => {
    dispatch(requestLogout())
    myFirebase.auth().signOut()
        .then(() => {
            dispatch(receiveLogout())
        })
        .catch(error => {
            // Algo se  o logout falhar
            dispatch(logoutError())
        })
}

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest())
    myFirebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user))
        }
        dispatch(verifySucess())
    })
}

export const addPost = post => {
    return dispatch => {
        dispatch(creatingPost())
        myFirebase.auth().currentUser.getIdTokenResult()
            .catch(err => console.log(err))
            .then(user => {
                axios.post(`/posts.json?auth=${user.token}`, { ...post })
                    .catch(err => console.log(err))
                    .then(res => {
                        dispatch(fetchPosts())
                        dispatch(postCreated())
                })
            })
    }
}
