import { doc, updateDoc, arrayUnion, } from "firebase/firestore";
import {db} from '../firebase/firebase.config';
export const updateOrder = async (uid, updateData) => {
    const { payment, product } = updateData;
    const userDoc = {
        payment: {
            id: payment.id,
            status: payment.status,
            date: payment.update_time
        },
        products: product
    }
    const docRef = doc(db, `users/${uid}`);
    await updateDoc(docRef,{orders: arrayUnion({...userDoc})});
}