import { Request, Response } from 'express';

import { AuthorizationService } from '../services/authorization.service';
import { SlotMachineService } from '../services/slot-machine.service';
import { UserService } from '../services/user.service';


const getSpin = async (req: Request, res: Response) => {
    const userId = new AuthorizationService().verify(req, res);
    if (!userId) return;

    if (await new UserService().alterWallet(userId, -10)) {

        let slotMachineService = new SlotMachineService();
        let slotMachineItems = slotMachineService.spin();
        let prize = slotMachineService.checkPrize(slotMachineItems);
        return res.status(200).json({
            slotMachineItems,
            prize,
        });
    } else {
        return res.status(500).json({ message: 'Insuficient founds' })
    }
}

const getSlotMachine = async (req: Request, res: Response) => {
    let slotMachineService = new SlotMachineService();
    let slotMachine = slotMachineService.slotMachine();
    return res.status(200).json({ slotMachine });
}

export default { getSpin, getSlotMachine };