import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Country } from "../models/country.model";

import { CountryState } from "../reducers/country.reducer";

export type CountryAction = { type: "ADD_COUNTRY"; payload: Country[] }

export const getAllCountries = (): ThunkAction<void, CountryState, unknown, CountryAction> => async (dispatch) => {
  const { data } = await axios.get<Country[]>("/countries");
  dispatch({
    type: "ADD_COUNTRY",
    payload: data
  });
};

export const searchCountryFullName = (search: string):
  ThunkAction<void, CountryState, unknown, CountryAction> => async (dispatch) => {
    const { data } = await axios.get<Country>(`/country/${search}`);
    dispatch({
      type: "ADD_COUNTRY",
      payload: [data]
    });
  };

export const searchCountryPartialName = (search: string):
  ThunkAction<void, CountryState, unknown, CountryAction> => async (dispatch) => {
    const { data } = await axios.get<Country[]>(`/countries/${search}`);
    dispatch({
      type: "ADD_COUNTRY",
      payload: data
    });
  };
