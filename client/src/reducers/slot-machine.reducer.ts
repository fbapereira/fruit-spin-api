import { SlotMachineAction } from "../actions/slot-machine.action";
import { SlotMachineItem } from "../models/slot-machine.model";

export interface SlotMachineState {
    slotMachineItems: SlotMachineItem[],
    reward: number,
}

export const initialState = {
    slotMachineItems: [],
    reward: 0,
}

export const slotMachineReducer = (state: SlotMachineState = initialState, action: SlotMachineAction) => {
    console.log(2 + action.type);
    switch (action.type) {
        case "ADD_SPIN": {
            return { ...state, slotMachineItems: action.payload.slotMachineItems, reward: state.reward + action.payload.reward };
        }
        default: {
            return state
        }
    }
}
