import { CountryAction } from "../actions/country.actions"
import { Country } from "../models/country.model";

export interface CountryState {
    search: string,
    countries: Country[],
}

export const initialState = {
    search: '',
    countries: [],
}

export const countryReducer = (state: CountryState = initialState, action: CountryAction) => {
    switch (action.type) {
        case "ADD_COUNTRY": {
            return { ...state, countries: action.payload.countries };
        }
        default: {
            return state
        }
    }
}
