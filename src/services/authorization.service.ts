import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { bCryptSecret } from '../configs/bcryptjs.config';


export class AuthorizationService {
    public verify (req: Request, res: Response): string | undefined {
        try {
            let token = req.header('authorization');

            if(!token) {
                res.status(401).json({message: 'Token is required'});
                return undefined;
            }

            token = token.split(" ")[1];
            const payload = verify(token, bCryptSecret);

            if (!payload || (typeof(payload) !== "string" && !payload.id)) {
                res.status(401).json({message: 'Token is invalid'});
                return undefined;
            }

            return typeof(payload) === "string" ? payload : payload.id;
        } catch {
            res.status(401).json({message: 'Token is invalid'});
        }
    }
}