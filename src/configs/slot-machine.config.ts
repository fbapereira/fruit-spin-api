import { SlotMachine, SlotMachineItem } from '../models/slot-machine.model';

const slotMachineConfig: SlotMachine = {
  reels: [
    [
      SlotMachineItem.cherry,
      SlotMachineItem.lemon,
      SlotMachineItem.apple,
      SlotMachineItem.lemon,
      SlotMachineItem.banana,
      SlotMachineItem.banana,
      SlotMachineItem.lemon,
      SlotMachineItem.lemon,
    ],
    [
      SlotMachineItem.lemon,
      SlotMachineItem.apple,
      SlotMachineItem.lemon,
      SlotMachineItem.lemon,
      SlotMachineItem.cherry,
      SlotMachineItem.apple,
      SlotMachineItem.banana,
      SlotMachineItem.lemon,
    ],
    [
      SlotMachineItem.lemon,
      SlotMachineItem.apple,
      SlotMachineItem.lemon,
      SlotMachineItem.apple,
      SlotMachineItem.cherry,
      SlotMachineItem.lemon,
      SlotMachineItem.banana,
      SlotMachineItem.lemon,
    ],
  ],
};

export default slotMachineConfig;
