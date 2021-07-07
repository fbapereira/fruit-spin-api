import slotMachineRewardConfig from "../configs/slot-machine-reward.config";
import slotMachineConfig from "../configs/slot-machine.config";
import { SlotMachine, SlotMachineItem } from "../models/slot-machine.model";

export class SlotMachineService {
    private _slotMachineRewards = slotMachineRewardConfig;
    private _slotMachine = slotMachineConfig;
    public slotMachine(): SlotMachine {
        return this._slotMachine;
    }

    public spin(): SlotMachineItem[] {
        let slotMachineItems: SlotMachineItem[] = [];

        this.slotMachine().reels.forEach((reel) => {
            slotMachineItems = [...slotMachineItems, reel[this.getRandom(reel.length)]]
        });

        return slotMachineItems;
    }

    public checkPrize(slotMachineItems: SlotMachineItem[]): number {
        let reward = this._slotMachineRewards.find(({ slotMachineItem }) => slotMachineItem === slotMachineItems[0]);

        if (!reward) {
            throw new Error('Error on the Slot Machine Reward Config');
        }

        if (slotMachineItems[0] === slotMachineItems[1]) {
            if (slotMachineItems[0] === slotMachineItems[2]){
                return reward.tripleMatch;
            }
            return reward.doubleMatch;
        }

        return 0;
    }

    private getRandom(max: number): number {
        return Math.floor(Math.random() * max);
    }
}