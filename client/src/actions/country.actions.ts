import { ThunkAction } from "redux-thunk"

import axios from "axios"
import { CountryState } from "../reducers/country.reducer"

export type CountryAction = { type: "ADD_COUNTRY"; payload: AddCountryPayload }

export const getAllCountries = (): ThunkAction<void, CountryState, unknown, CountryAction> => {
  return async (dispatch) => {
    const countryStream = await axios.get("/countries")
    const countries = countryStream.data
    dispatch({
      type: "ADD_COUNTRY",
      payload: {
        countries,
      },
    })
  }
}

export const searchCountryFullName = (search: string): ThunkAction<void, CountryState, unknown, CountryAction> => {
  return async (dispatch) => {
    const countryStream = await axios.get(`/country/${search}`)
    const countries = [countryStream.data]
    dispatch({
      type: "ADD_COUNTRY",
      payload: {
        countries,
      },
    })
  }
}

export const searchCountryPartialName = (search: string): ThunkAction<void, CountryState, unknown, CountryAction> => {
  return async (dispatch) => {
    const countryStream = await axios.get(`/countries/${search}`)
    const countries = countryStream.data
    dispatch({
      type: "ADD_COUNTRY",
      payload: {
        countries,
      },
    })
  }
}

export interface AddCountryPayload {
  countries: any[]
}
