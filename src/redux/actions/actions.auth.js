import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import {collection, doc, setDoc} from 'firebase/firestore';
import {db} from '../../firebase/firebase.config';
import {auth} from '../../firebase/firebase.config';
import {typesAuth} from '../types';
export const registerWithEmail = (userForm) => {
    return async function (dispatch) {
        const {userName, fullName, email, password} = userForm
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        await registerUserDb({
            userName: userName,
            fullName: fullName,
            email: email
        }, user.uid)
        return dispatch({
            type: typesAuth.loginWithEmail,
            payload: user
        })
    }
}
const registerUserDb = async (user, uid) => {
    try {
        const citiesRef = collection(db, "users");
        await setDoc(doc(citiesRef, uid),user);
    }catch (e) {
        console.error(e)
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