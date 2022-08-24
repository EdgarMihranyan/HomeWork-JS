import { ServerError } from '../../utils/custom-errors.js';
import { errorSignIn } from '../../constants/constant-errors.js';
import { createUserS, getUserByEmailS } from '../users/users-service.js';
import { comparePassword } from '../../utils/bcrypt.js';

export const signInS = async (user) => {
     const { email, password } = user;
     const got = await getUserByEmailS(email);
     const checkPassword = await comparePassword(password, got.password);
     if (!checkPassword) {
          throw new ServerError(404, undefined, errorSignIn);
     }
     return { message: 'Success' };
};
export const signUpS = async (user) => {
     await createUserS(user);
     return { message: 'You have successfully registered' };
};
