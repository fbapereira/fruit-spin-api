import express from 'express';

import userController from '../controllers/user.controller';

const router = express.Router();

router.post('/user', userController.create);
router.post('/login', userController.login);

export = router;
