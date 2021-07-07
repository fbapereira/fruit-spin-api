import { decodeBase64 } from "bcryptjs";
import firebase from "firebase";
import firebaseConfig from "../configs/firebase.config";



export class UserService {
    private db: any;
    constructor() {
    }

    public async alterWallet(userId: string, amount: number): Promise<boolean> {
        this.db = firebase.firestore();
        const user = await this.db.collection('users').doc(userId).get();
        const wallet = user.data().wallet || 0;

        if(wallet + amount < 0) {
            return false;
        }

        this.db.doc(`users/${ userId }`).set({ wallet: wallet + amount }, {merge: true});
        return true;
    }
}