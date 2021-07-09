import { Request } from 'express';
import { verify } from 'jsonwebtoken';

import { bCryptSecret } from '../configs/bcryptjs.config';

const authenticate = (req: Request): string | undefined => {
  try {
    let token = req.header('authorization');
    if (!token) return undefined;

    token = token.split(' ')[1];
    const payload = verify(token, bCryptSecret);
    return typeof payload !== 'string' ? payload?.id : payload;
  } catch {
    return undefined;
  }
};

export default { authenticate };
