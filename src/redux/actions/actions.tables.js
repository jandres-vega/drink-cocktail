import {typesTables} from "../types";

export {typesTables} from '../types';
export const saveOrderOfDrinks = (dataTable) => {
    let tables = []
    tables.push(dataTable)
    return {
        type: typesTables.addTable,
        payload: tables
    }
}