import { hashSync } from 'bcryptjs';
import firebase from 'firebase';

import { appConfig } from '../configs/app.config';

const getDB = () => firebase.firestore();

const create = async (name: string, email: string, password: string): Promise<void> => {
  const wallet = appConfig.defaultWelcomeCoins;
  password = hashSync(password);
  await getDB().collection('users').add({ name, email, password, wallet });
};

const alterWallet = async (userId: string, amount: number): Promise<boolean> => {
  const user = await getDB().collection('users').doc(userId).get();
  const wallet = user.data().wallet + amount;

  if (wallet < 0) return false;

  getDB().doc(`users/${userId}`).set({ wallet }, { merge: true });
  return true;
};

const verifyEmailExistence = async (email: string): Promise<boolean> => {
  const user = await getDB().collection('users').where('email', '==', email).get();
  return !user.empty;
};

export default { alterWallet, verifyEmailExistence, create };
