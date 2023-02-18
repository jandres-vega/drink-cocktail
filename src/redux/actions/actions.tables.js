import {typesTables} from "../types";
import {db} from '../../firebase/firebase.config';
import {doc, getDocs, collection, query} from 'firebase/firestore';
export {typesTables} from '../types';
export const saveOrderOfDrinks = (dataTable) => {
    let tables = []
    tables.push(dataTable)
    return {
        type: typesTables.addTable,
        payload: tables
    }
}
export const getAllTables = () => {
    return async function (dispach) {
        const queryCollection = query(collection(db, 'allTables'));
        const querySnapshot = await getDocs(queryCollection);
        let docs = []
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data()})
        });
        return dispach({
            type: typesTables.getAllTables,
            payload: docs
        })
    }
}