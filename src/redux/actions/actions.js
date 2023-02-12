import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';
import {types} from '../types';
import axios from "axios";
export const registerWithEmail = (user) => {
    return async function (dispatch) {
        let createUser = await createUserWithEmailAndPassword(auth, user.email, user.password);
        return dispatch({
            type: types.loginWithEmail,
            payload: createUser
        })
    }
}

export const loginWithEmail = (user) => {
    return async function(dispatch) {
        let userLogin = await signInWithEmailAndPassword(auth, user.email, user.password);
        return dispatch({
            type: types.loginWithEmail,
            payload: userLogin
        })
    }
}
export const currentUser = () => {
    return function (dispatch) {
        onAuthStateChanged(auth, (user) => {
            dispatch({
                type: types.currentUser,
                payload: user
            })
        })
    }
}
export const signOutUser = () => {
    return async function (dispatch) {
        const signIn = await signOut(auth);
        return dispatch({
            type: types.signOutUser,
            payload: signIn
        })
    }
}

export const getAllDrinks = () => {
    return async function (dispatch) {
        const allDrinks = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        return dispatch({
            type: 'GET_ALL_DRINKS',
            payload: allDrinks.data
        })
    }
}