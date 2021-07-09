import { SlotMachineItem } from './slot-machine.model';

export interface SlotMachineReward {
  slotMachineItem: SlotMachineItem;
  doubleMatch: number;
  tripleMatch: number;
}
