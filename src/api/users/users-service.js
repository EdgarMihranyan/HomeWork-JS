/* eslint-disable no-prototype-builtins */
import { toHashPassword } from '../../utils/bcrypt.js';
import { ServerError } from '../../utils/custom-errors.js';
import {
     createUserR, getUsersR, getUserR, getUserByEmailR,
} from './users-repository.js';

export const getUsersS = async () => getUsersR();

export const getUserS = async (id) => {
     const user = await getUserR(id);
     if (user == null) throw new ServerError(404, `${id}\` user`, 'User not a found');

     return user;
};
export const getUserByEmailS = async (email) => {
     const got = await getUserByEmailR(email);
     return got;
};

export const createUserS = async (user) => {
     const got = await getUserByEmailS(user.email);
     if (got) throw new ServerError(400, user.email, 'Email is already exits');

     return createUserR({
          ...user,
          password: await toHashPassword(user.password),
     });
};
