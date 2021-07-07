import { Request, Response } from 'express';
import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import firebase from 'firebase';

import firebaseConfig from '../configs/firebase.config';
import { bCryptSecret } from '../configs/bcryptjs.config';
import { appConfig } from '../configs/app.config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const create = async (req: Request, res: Response) => {
    try {
        let { name, email, password } = req.body;
        const user = await db.collection('users').where("email", "==", email).get();

        if (!user.empty) {
            res.status(500).json({ message: "Email already taken" });
            return;
        }

        const wallet = appConfig.defaultWelcomeCoins;
        password = hashSync(password);
        await db.collection('users').add({ name, email, password, wallet });
        res.status(200).json({ message: "User created" });
    } catch (err) {
        res.status(500).json({ message: "Unexpected error" });

    }
}

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const userSnapshot = await db.collection('users').where("email", "==", email).get();

        if (!userSnapshot.empty && compareSync(password, userSnapshot.docs[0].data().password)) {
            const id  =  userSnapshot.docs[0].id;
            const token = sign({ id }, bCryptSecret, { expiresIn: 86400 });
            res.status(200).json({ auth: true, token });
        } else {
            res.status(401).json({ auth: false });
        }

    } catch (err) {
        res.status(500).json({
            message: "Unexpected error",
            stack: err,
        });
    }
}

export default { create, login };