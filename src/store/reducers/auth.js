import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    VERIFY_REQUEST, VERIFY_SUCCESS, SET_POSTS, CREATING_POST, POST_CREATED
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
        posts: [],
        isUploading: false
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
            case SET_POSTS:
                return {
                    ...state,
                    posts: action.payload
                };
            case CREATING_POST:
                return {
                    ...state,
                    isUploading: true
                };
            case POST_CREATED:
                return {
                    ...state,
                    isUploading: false
                };
            default:
                return state;
        }
}
