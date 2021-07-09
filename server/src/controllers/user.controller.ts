import { Request, Response } from 'express';
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import firebase from 'firebase';

import UserService from '../services/user.service';

import { bCryptSecret } from '../configs/bcryptjs.config';

const getDB = () => firebase.firestore();

const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    const isEmailTaken = await UserService.verifyEmailExistence(email);
    if (isEmailTaken) return res.status(500).json({ message: 'Email already taken' });

    UserService.create(name, email, password);
    return res.status(200).json({ message: 'User created' });
  } catch (err) {
    return res.status(500).json({
      message: 'Unexpected error',
      stack: err,
    });
  }
};

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const userSnapshot = await getDB().collection('users').where('email', '==', email).get();

    if (!userSnapshot.empty && compareSync(password, userSnapshot.docs[0].data().password)) {
      const id = userSnapshot.docs[0].id;
      const token = sign({ id }, bCryptSecret, { expiresIn: 86400 });
      res.status(200).json({ auth: true, token });
    } else {
      res.status(401).json({ auth: false });
    }
  } catch (err) {
    return res.status(500).json({
      message: 'Unexpected error',
      stack: err,
    });
  }
};

export default { create, login };
