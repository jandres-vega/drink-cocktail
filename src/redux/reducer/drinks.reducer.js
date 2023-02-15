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
        case typesDrinks.addOrderDrinks:
            return {
                ...state,
                ordersDrinks: state.ordersDrinks.concat(action.payload)
            }
        case typesDrinks.deleteDrinkOrder:
            let newArray = state.ordersDrinks.filter(item => {
                return item.nameDrink !== action.payload
            })
            return {
                ...state,
                ordersDrinks: newArray
            }
        default:
            return state
    }
}