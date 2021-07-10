import axios from "axios"
import { ThunkAction } from "redux-thunk"
import { SlotMachineItem } from "../models/slot-machine.model"
import { User } from "../models/user.model"
import { AuthenticationState } from "../reducers/authentication.reducer"
import { RootReducer } from "../store"
import { CreateUserPayload, AuthenticationAction } from "./authentication.action"

export type SlotMachineAction = { type: "ADD_SPIN"; payload: AddSpinPayload }

export interface AddSpinPayload {
  slotMachineItems: SlotMachineItem[]
  reward: number
}

export const spin = (): ThunkAction<void, RootReducer, unknown, SlotMachineAction> => {
  return async (dispatch, state) => {
    try {
      debugger
      const response = await axios.get("/spin", {
        headers: {
          Authorization: "Beared " + state().authenticationReducer.token,
        },
      })
      const payload: AddSpinPayload = response.data

      dispatch({
        type: "ADD_SPIN",
        payload,
      })
    } catch (error) {}
  }
}
