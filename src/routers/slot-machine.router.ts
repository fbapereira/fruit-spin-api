import express from 'express';
import slotMachineController from '../controllers/slot-machine.controller';

const router = express.Router();
router.get('/spin', slotMachineController.getSpin);
router.get('/slot-machine', slotMachineController.getSlotMachine);

export = router;