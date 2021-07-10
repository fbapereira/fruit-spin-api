import axios from "axios";
import { ThunkAction } from "redux-thunk";

import { SlotMachineItem } from "../models/slot-machine.model";
import { RootReducer } from "../store";

export type SlotMachineAction = { type: "ADD_SPIN"; payload: AddSpinPayload }

export interface AddSpinPayload {
  slotMachineItems: SlotMachineItem[]
  reward: number
}

export const spin = (): ThunkAction<void, RootReducer, unknown, SlotMachineAction> => async (dispatch, state) => {
  try {
    const { data } = await axios.get<AddSpinPayload>("/spin", {
      headers: { Authorization: `Beared ${state().authenticationReducer.token}` }
    });

    dispatch({
      type: "ADD_SPIN",
      payload: data
    });
  } catch (error) { }
};
