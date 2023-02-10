import {types} from '../types';

const initialState = {
    userLogged: []
}
export function rootReducer(state= initialState, action) {
    switch (action.type) {
        case types.registerWithEmail:
            return {
                ...state,
                userLogged: action.payload
            }
        case types.loginWithEmail:
            return {
                ...state,
                userLogged: action.payload
            }
        case types.currentUser:
            return {
                ...state,
                userLogged: action.payload
            }
        case types.signOutUser:
            return {
                ...state,
                userLogged: action.payload
            }
        default:
            return state
    }
}