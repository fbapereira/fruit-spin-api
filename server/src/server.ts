import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import firebase from 'firebase';

import countryRouter from './routers/country.router';
import userRouter from './routers/user.router';
import slotMachineRouter from './routers/slot-machine.router';

import firebaseConfig from './configs/firebase.config';

firebase.initializeApp(firebaseConfig);

const router: Express = express();

router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }
  next();
});

router.use('/', countryRouter);
router.use('/', userRouter);
router.use('/', slotMachineRouter);

router.use((req, res) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
