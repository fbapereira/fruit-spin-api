import { Request, Response } from 'express';

import AuthorizationService from '../services/authorization.service';
import SlotMachineService from '../services/slot-machine.service';
import UserService from '../services/user.service';

import { appConfig } from '../configs/app.config';

const getSpin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = AuthorizationService.authenticate(req);
    if (!userId) return res.status(401).json({ message: 'Invalid Token' });
// refact to return coins 

    const isWalletOperationSuccessful = await UserService.alterWallet(userId, appConfig.spinPrice * -1);
    if (!isWalletOperationSuccessful) return res.status(500).json({ message: 'Insufficient founds' });

    const slotMachineItems = SlotMachineService.spin();
    const prize = SlotMachineService.checkPrize(slotMachineItems);

    if (prize > 0) await UserService.alterWallet(userId, prize);

    return res.status(200).json({
      slotMachineItems,
      prize,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Unexpected error',
      stack: err,
    });
  }
};

const getSlotMachine = async (req: Request, res: Response): Promise<Response> => {
  try {
    const slotMachine = SlotMachineService.getSlotMachine();
    return res.status(200).json({ slotMachine });
  } catch (err) {
    return res.status(500).json({
      message: 'Unexpected error',
      stack: err,
    });
  }
};

export default { getSpin, getSlotMachine };
