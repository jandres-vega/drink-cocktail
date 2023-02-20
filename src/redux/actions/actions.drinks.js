import axios from "axios";
import {typesDrinks} from '../types';
export const getAllDrinks = () => {
    return async function (dispatch) {
        const allDrinks = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        return dispatch({
            type: typesDrinks.getAllDrinks,
            payload: allDrinks.data
        })
    }
}
export const addDrinksToOrder = (drinksOrder) => {
    let drinks = [];
    drinks.push(drinksOrder)
    return {
        type: typesDrinks.addOrderDrinks,
        payload: drinks
    }
}
export const deleteDrinkOdOrder = (nameDrink) => {
    return {
        type: typesDrinks.deleteDrinkOrder,
        payload: nameDrink
    }
}


