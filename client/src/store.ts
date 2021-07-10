import { applyMiddleware, combineReducers, createStore } from "redux";
import { countryReducer, CountryState } from "./reducers/country.reducer";
import { authenticationReducer, AuthenticationState } from "./reducers/authentication.reducer";
import { slotMachineReducer, SlotMachineState } from "./reducers/slot-machine.reducer";
import thunk from "redux-thunk";

import { initialState as authenticationReducerInitialState } from "./reducers/authentication.reducer";
import { initialState as countryReducerInitialState } from "./reducers/country.reducer";
import { initialState as slotMachineReducerInitialState } from "./reducers/slot-machine.reducer";

const middleware = [thunk];

const initialState = {
  countryReducer: countryReducerInitialState,
  authenticationReducer: authenticationReducerInitialState,
  slotMachineReducer: slotMachineReducerInitialState
};

export interface RootReducer {
  countryReducer: CountryState
  slotMachineReducer: SlotMachineState
  authenticationReducer: AuthenticationState
}

export const rootReducer = combineReducers({
  countryReducer,
  slotMachineReducer,
  authenticationReducer
});

export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
