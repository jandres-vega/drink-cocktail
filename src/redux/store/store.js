import {applyMiddleware} from 'redux';
import {createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authR} from '../reducer/auth.reducer';
import {drinkR} from '../reducer/drinks.reducer';
import {tablesR} from '../reducer/tables.reducer';

const reducer = combineReducers({
    authR,
    drinkR,
    tablesR
})
export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)
