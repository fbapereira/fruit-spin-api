import { SlotMachineReward } from '@common/types/slot-machine-reawrd.model';
import { SlotMachineItem } from '@common/types/slot-machine.model';

const slotMachineRewardConfig: SlotMachineReward[] = [
  {
    slotMachineItem: SlotMachineItem.lemon,
    tripleMatch: 3,
    doubleMatch: 0,
  },
  {
    slotMachineItem: SlotMachineItem.banana,
    tripleMatch: 15,
    doubleMatch: 5,
  },
  {
    slotMachineItem: SlotMachineItem.apple,
    tripleMatch: 20,
    doubleMatch: 10,
  },
  {
    slotMachineItem: SlotMachineItem.cherry,
    tripleMatch: 50,
    doubleMatch: 40,
  },
];

export default slotMachineRewardConfig;
