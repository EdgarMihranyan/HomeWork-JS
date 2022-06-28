/* eslint-disable no-prototype-builtins */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ServerError } from '../../utils/custom-errors.js';
import { readFile, writeFile } from '../../utils/fs-promise.js';
import { isUniqueV } from './validator-user.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const filePath = resolve(__dirName, 'users.json');

export const getUsersS = async () => JSON.parse(await readFile(filePath));

export const getUserS = async (index) => {
     const users = await getUsersS(filePath);
     if (index >= users.length) throw new ServerError(404, `User ${index} `, 'User not a found');
     return users[index];
};
export const deleteUserS = async (index) => {
     const users = await getUsersS(filePath);

     if (index >= users.length) throw new ServerError(400, `User ${index}`, 'User not a found');

     const removedUser = users[index];
     const newUsers = users.filter((_, i) => i !== index);

     writeFile(filePath, JSON.stringify(newUsers, undefined, 2));

     return removedUser;
};
export const createUserS = async (user) => {
     const users = await getUsersS(filePath);

     isUniqueV(user, users);

     users.push(user);
     writeFile(filePath, JSON.stringify(users, undefined, 2));
     return user;
};
export const updateUserS = async (index, user) => {
     const users = await getUsersS(filePath);

     if (index >= users.length) throw new ServerError(404, `User ${index}`, 'User not a found');

     if (user.userName) isUniqueV(user, users);

     const currentUser = users[index];

     Object.keys(user).forEach((prop) => {
          if (currentUser.hasOwnProperty(prop)) currentUser[prop] = user[prop];
          else throw new ServerError(404, prop, 'This property not a found');
     });
     writeFile(filePath, JSON.stringify(users, undefined, 2));

     return users[index];
};
