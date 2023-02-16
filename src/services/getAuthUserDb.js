import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebase/firebase.config";
export const getUserDb = async (uid) => {
    const docRef = doc(db, 'users', `${uid}`);
    const snapDoc = await getDoc(docRef);
    if (snapDoc.exists()){
        return snapDoc.data();
    }
}