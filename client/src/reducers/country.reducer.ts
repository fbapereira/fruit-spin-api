import { CountryAction } from "../actions/country.actions"

export interface CountryState {
    search: string,
    countries: any[],
}

const initialState: CountryState = {
    search: '',
    countries: [],
}

export const countryReducer = (state: CountryState = initialState, action: CountryAction) => {
    console.log(2 + action.type);
    switch (action.type) {
        case "ADD_COUNTRY": {
            return { ...state, countries: action.payload.countries };
        }
        default: {
            return state
        }
    }
}
