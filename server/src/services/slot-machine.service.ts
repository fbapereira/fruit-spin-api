import { SlotMachine, SlotMachineItem } from '@common/types/slot-machine.model';

import slotMachineRewardConfig from '../configs/slot-machine-reward.config';
import slotMachineConfig from '../configs/slot-machine.config';

const getSlotMachine = (): SlotMachine => slotMachineConfig;

const spin = (): SlotMachineItem[] => {
  let slotMachineItems: SlotMachineItem[] = [];

  getSlotMachine().reels.forEach((reel) => {
    slotMachineItems = [...slotMachineItems, reel[getRandom(reel.length)]];
  });

  return slotMachineItems;
};

const checkPrize = (slotMachineItems: SlotMachineItem[]): number => {
  const reward = slotMachineRewardConfig.find(({ slotMachineItem }) => slotMachineItem === slotMachineItems[0]);

  if (!reward) {
    throw new Error('Error on the Slot Machine Reward Config');
  }

  if (slotMachineItems[0] === slotMachineItems[1]) {
    if (slotMachineItems[0] === slotMachineItems[2]) {
      return reward.tripleMatch;
    }
    return reward.doubleMatch;
  }

  return 0;
};

const getRandom = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export default { getSlotMachine, checkPrize, spin };
