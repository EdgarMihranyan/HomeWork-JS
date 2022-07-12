/* eslint-disable no-param-reassign */
import { messageJWT, signJWT, verificationJWT } from '../../utils/JWT.js';
import { ServerError } from '../../utils/custom-errors.js';
import {
     getUserByEmailS, createUserS, updateUserS,
} from '../users/users-server.js';
import { errorSignIn, errorSignUp } from '../../constants/constant-errors.js';
import mailer from '../../utils/nodemailer.js';

export const verificationS = async (data) => {
     const { id } = await verificationJWT(data.params.token);
     updateUserS(id, { isMailVerification: true });
     return { message: 'Verification is completed' };
};

export const signInS = async (user) => {
     const { email, password } = user;
     const got = await getUserByEmailS(email);
     if (!got && password !== got.password) throw new ServerError(404, undefined, errorSignIn);
     console.log(email);
     const token = signJWT({ id: got.id }, '1h');
     if (!got.isMailVerification) {
          mailer(messageJWT(email, token));
          return { message: `${email} address sent message, confirm to login` };
     }
     return { message: `Your token key to next steps  \`  ${token}` };
};
export const signUpS = async (data) => {
     const { email } = data;
     const got = await getUserByEmailS(email);
     if (got) {
          const token = signJWT({ id: got.id }, '5h');
          if (got.isMailVerification) throw new ServerError(404, undefined, errorSignUp);
          mailer(messageJWT(email, token));
          return { message: `Your ${email} address has already been registered, we have sent a message, confirm to enter your account` };
     }
     const user = await createUserS(data);
     const token = signJWT({ id: user.id }, '5h');
     mailer(messageJWT(email, token));
     return { message: `${email} address sent message, confirm to login` };
};
