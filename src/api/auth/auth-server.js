import { sign } from '../../utils/JWT.js';
import { ServerError } from '../../utils/custom-errors.js';
import { getUserByEmailR } from '../users/users-repository.js';
import { errorSignIn, errorSignUp } from '../../constants/constant-errors.js';
import { createUserS } from '../users/users-server.js';

export const signInS = async (user) => {
     const { email, password } = user;
     const got = await getUserByEmailR(email);
     if (!got) throw new ServerError(401, undefined, errorSignIn);
     if (password !== got.password) throw new ServerError(404, undefined, errorSignIn);
     const token = sign({ id: got.id }, '1h');
     return token;
};
export const signUpS = async (user) => {
     const { email } = user;
     const got = await getUserByEmailR(email);
     if (got) throw new ServerError(401, undefined, errorSignUp);
     createUserS(user);
};
