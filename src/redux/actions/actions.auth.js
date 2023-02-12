import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';
import {typesAuth} from '../types';


export const registerWithEmail = (user) => {
    return async function (dispatch) {
        let createUser = await createUserWithEmailAndPassword(auth, user.email, user.password);
        return dispatch({
            type: typesAuth.loginWithEmail,
            payload: createUser
        })
    }
}

export const loginWithEmail = (user) => {
    return async function(dispatch) {
        let userLogin = await signInWithEmailAndPassword(auth, user.email, user.password);
        return dispatch({
            type: typesAuth.loginWithEmail,
            payload: userLogin
        })
    }
}
export const currentUser = () => {
    return function (dispatch) {
        onAuthStateChanged(auth, (user) => {
            dispatch({
                type: typesAuth.currentUser,
                payload: user
            })
        })
    }
}
export const signOutUser = () => {
    return async function (dispatch) {
        const signIn = await signOut(auth);
        return dispatch({
            type: typesAuth.signOutUser,
            payload: signIn
        })
    }
}