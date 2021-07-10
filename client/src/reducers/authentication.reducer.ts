import { AuthenticationAction } from "../actions/authentication.action";
import { CountryAction } from "../actions/country.actions";
import { User } from "../models/user.model";

export interface AuthenticationState {
    user: User | null,
    token: string | null,
}

export const initialState: AuthenticationState = {
    user: null,
    token: null,
}

export const authenticationReducer = (state: AuthenticationState = initialState, action: AuthenticationAction) => {
    switch (action.type) {
        case "ADD_USER": {
            return { ...state, user: action.payload.user, token: action.payload.token };
        }
        default: {
            return state
        }
    }
}