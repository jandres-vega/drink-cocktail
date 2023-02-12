import {types} from '../types';

const initialState = {
    userLogged: [],
    allDrinks: []
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
        case 'GET_ALL_DRINKS':
            return {
                ...state,
                allDrinks: action.payload.drinks
            }
        default:
            return state
    }
}