/* eslint-disable no-prototype-builtins */
import { ServerError } from '../../utils/custom-errors.js';
import { isCorrectPropertyUV } from './user-validator.js';
import {
     createUserR, getUsersR, getUserR, getUserByEmailR, deleteUserR, updateUserR,
} from './users-repository.js';

export const getUsersS = async () => getUsersR();

export const getUserS = async (id) => {
     const user = await getUserR(id);
     if (user == null) throw new ServerError(404, `${id}\` user`, 'User not a found');

     return user;
};

export const deleteUserS = async (id) => {
     const user = await getUserS(id);

     if (user == null) throw new ServerError(400, `${id}\` user`, 'User not a found');

     deleteUserR(id);
     return user;
};

export const createUserS = async (user) => {
     const got = (await getUserByEmailR(user.email)[0]);

     if (got) throw new ServerError(400, user.email, 'Email is already exits');
     createUserR(user);
};

export const updateUserS = async (id, userUpd) => {
     isCorrectPropertyUV(userUpd);
     await updateUserR(id, userUpd);
};
