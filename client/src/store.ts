import { applyMiddleware, createStore } from "redux";
import { countryReducer } from "./reducers/country.reducer";
import thunk from 'redux-thunk';

const middleware = [thunk];
const initialState = {
    search: '',
    searchMode: 'All',
    countries: [{a: '1'}, {a: '2'}],
}


export const store = createStore(countryReducer, initialState, applyMiddleware(...middleware))