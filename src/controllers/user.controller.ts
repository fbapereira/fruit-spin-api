import axios, { AxiosResponse, AxiosError } from 'axios';
import { Request, Response } from 'express';
import { hashSync, compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import firebase from 'firebase';
import firebaseConfig from '../firebase.config';

const secret = 'Words_are_in_my_not_so_humble_opinion_our_most_inexhaustible_source_of_magic';
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const create = async (req: Request, res: Response) => {
    try {
        debugger
        let { name, email, password } = req.body;
        const user = await db.collection('users').where("email", "==", email).get();

        if (!user.empty) {
            res.status(500).json({ message: "Email already taken" });
            return;
        }

        password = hashSync(password);
        await db.collection('users').add({ name, email, password });
        res.status(200).json({ message: "User created" });
    } catch (err) {
        res.status(500).json({ message: "Unexpected error" });

    }
}

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await db.collection('users').where("email", "==", email).get();

        if (!user.empty && compareSync(password, user.docs[0].data().password)) {
            const token = sign({ email }, secret, { expiresIn: 86400 });
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