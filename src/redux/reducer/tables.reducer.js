import {typesTables, typesInitialState} from '../types';
import {allTables} from '../../utils/objectTables';
const initialState = {
    tables: [...allTables],
    tabletSelect: []
}
export function tablesR(state = initialState, action) {
    switch (action.type) {
        case typesTables.addTable:
            return {
                ...state,
                tabletSelect: action.payload
            }
        case typesInitialState.clearState:
            return {
                ...state,
                tabletSelect: initialState.tabletSelect
            }
        default:
            return state
    }
}