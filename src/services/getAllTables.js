import {getDocs, collection, query} from 'firebase/firestore';
import {db} from "../firebase/firebase.config";
export const getTables = async () => {
    const queryCollection = query(collection(db, 'allTables'));
    const querySnapshot = await getDocs(queryCollection);
    let docs = []
    querySnapshot.forEach((doc) => {
        docs.push({id: doc.id, ...doc.data()})
    });
    return docs
}