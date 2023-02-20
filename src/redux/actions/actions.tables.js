import {typesTables} from "../types";
import {db} from '../../firebase/firebase.config';
import {getTables} from '../../services/getAllTables';
import {collection, doc, getDocs, query, updateDoc} from 'firebase/firestore';


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
        const docs = await getTables();
        return dispach({
            type: typesTables.getAllTables,
            payload: docs
        })
    }
}
export const updateReservedTable = (idTable, reserved) => {
    return async function(dispatch) {
        const table = doc(db, 'allTables', idTable);
        const result = await updateDoc(table, {
            reserved: !reserved
        })
        return dispatch({
            type: typesTables.updateTable,
            payload: null
        })
    }

}