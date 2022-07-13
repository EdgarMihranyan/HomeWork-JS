import { errorAuth, errorNotAdmin } from '../constants/constant-errors.js';
import { ServerError } from './custom-errors.js';
import { verificationJWT } from './JWT.js';

export const authorization = async (req, res, next) => {
     try {
          const token = (req.headers.authorization).split(' ')[1];
          const verified = await verificationJWT(token);
          req.user = { id: verified.id };
          next();
     } catch (err) {
          next(new ServerError(401, 'Token', errorAuth));
     }
};
export const isAdminChanges = async (req, res, next) => {
     try {
          const token = (req.headers.authorization).split(' ')[1];
          const { isAdmin } = await verificationJWT(token);
          console.log(isAdmin);
          if (!isAdmin) next(new ServerError(401, 'User', errorNotAdmin));
          next();
     } catch (err) {
          next(new ServerError(401, 'Token', errorAuth));
     }
};
