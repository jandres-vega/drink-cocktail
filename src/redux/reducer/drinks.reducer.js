import {typesDrinks} from '../types';
const initialState = {
    allDrinks: [],
    ordersDrinks: []
}
export function drinkR(state = initialState, action) {
    switch (action.type) {
        case typesDrinks.getAllDrinks:
            return {
                ...state,
                allDrinks: action.payload.drinks
            }
        default:
            return state
    }
}