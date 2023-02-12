import {typesAuth} from '../types';

const initialState = {
    userLogged: [],
}
export function authR(state= initialState, action) {
    switch (action.type) {
        case typesAuth.registerWithEmail:
            return {
                ...state,
                userLogged: action.payload
            }
        case typesAuth.loginWithEmail:
            return {
                ...state,
                userLogged: action.payload
            }
        case typesAuth.currentUser:
            return {
                ...state,
                userLogged: action.payload
            }
        case typesAuth.signOutUser:
            return {
                ...state,
                userLogged: action.payload
            }
        default:
            return state
    }
}