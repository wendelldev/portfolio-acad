import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    VERIFY_REQUEST, VERIFY_SUCCESS, ADD_POST
} from "../actions"

export default (
        state = { //parametro state direto
        isLoggingIn: false,
        isLoggingOut: false,
        isVerifying: false,
        loginError: false,
        logoutError: false,
        isAuthenticated: false,
        user: {},
        posts: [{
            id: Math.random(),
            title: 'Teste: testes testes',
            data: '00/00/0000',
            local: 'Unimeta',
            content: {
                text1: 'vfdjvoirfjnvgiore',
                text2: 'jkrnfkiernfremfomjroemfre',
                img: 'https://teste.png',
                text3: 'jbhnodihnfcvoirnjfi'
            }
        }, {
            id: Math.random(),
            title: 'Teste: testes testes',
            data: '00/00/0000',
            local: 'Unimeta',
            content: {
                text1: 'vfdjvoirfjnvgiore',
                text2: 'jkrnfkiernfremfomjroemfre',
                img: 'https://teste2.png',
                text3: 'jbhnodihnfcvoirnjfi'
            }
        }]
    },
    action // parametro action
    ) => {
        switch (action.type) {
            case LOGIN_REQUEST:
                return {
                    ...state,
                    isLoggingIn: true,
                    loginError: false
                };
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    isLoggingIn: false,
                    isAuthenticated: true,
                    user: action.user
                };
            case LOGIN_FAILURE:
                return {
                    ...state,
                    isLoggingIn: false,
                    isAuthenticated: false,
                    loginError: true
                };
            case LOGOUT_REQUEST:
                return {
                    ...state,
                    isLoggingOut: true,
                    logoutError: false
                };
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    isLoggingOut: false,
                    isAuthenticated: false,
                    user: {}
                };
            case LOGOUT_FAILURE:
                return {
                    ...state,
                    isLoggingOut: false,
                    logoutError: true
                };
            case VERIFY_REQUEST:
                return {
                    ...state,
                    isVerifying: true,
                    verifyingError: false
                };
            case VERIFY_SUCCESS:
                return {
                    ...state,
                    isVerifying: false
                };
            case ADD_POST:
                return {
                    ...state,
                    posts: state.posts.concat({
                        ...action.payload
                    })
                }

            default:
                return state;
        }
}
