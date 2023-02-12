import axios from "axios";
import {typesDrinks} from '../types';
export const getAllDrinks = () => {
    return async function (dispatch) {
        const allDrinks = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        return dispatch({
            type: typesDrinks.getAllDrinks,
            payload: allDrinks.data
        })
    }
}