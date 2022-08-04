import { verify, sign } from '../../utils/JWT.js';
import { ServerError } from '../../utils/custom-errors.js';
import { errorSignIn } from '../../constants/constant-errors.js';
import { createUserS, getUserByEmailS, updateUserS } from '../users/users-service.js';
import mailer, { messageMail } from '../../utils/nodemailer.js';
import { comparePassword, toHashPassword } from '../../utils/bcrypt.js';

export const signInS = async (user) => {
     const { email, password } = user;
     console.log(email, password);
     const got = await getUserByEmailS(email);
     console.log((await comparePassword(password, got.password)));
     if (!(await comparePassword(password, got.password))) {
          throw new ServerError(404, undefined, errorSignIn);
     }
     if (!got.isVerifiedEmail) {
          const token = sign({ id: got.id, isAdmin: got.isAdmin }, '5h');
          await mailer(messageMail(got.email, 'verification', token));
          return { message: `Your ${email} address has already been registered, we have sent a message, confirm to enter your account` };
     }
     const token = sign({ id: got.id, isAdmin: got.isAdmin }, '6h');

     return { token };
};
export const signUpS = async (user) => {
     const created = await createUserS(user);
     const token = sign({ id: created.id }, '5h');
     await mailer(messageMail(created.email, 'Verification', token));
     return { message: `${created.email} address sent message, confirm to login` };
};

export const verifyEmailS = async (token) => {
     const verified = verify(token);
     await updateUserS(verified.id, { isVerifiedEmail: true });
     return { message: 'verification was successful' };
};
export const forgotPasswordS = async (email) => {
     const user = await getUserByEmailS(email);

     const token = sign({ id: user.id }, '5m');
     await mailer(messageMail(user.email, 'Forgot password', token));
     return { message: ` to your ${user.email} address send a message, confirm to recover your password` };
};
export const changeByEmailPasswordS = async (token, password) => {
     console.log(password);
     const gotToken = verify(token);

     const hashPassword = await toHashPassword(password);
     updateUserS(gotToken.id, { password: hashPassword });
     return { message: 'User Password changes' };
};
