/* eslint-disable no-new-object */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile, writeFile } from '../../utils/fs-promise.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const filePath = resolve(__dirName, 'users.json');

const getUsers = async (path) => {
     const users = await readFile(path);
     return JSON.parse(users);
};

export const getUsersC = async (req, res) => {
     try {
          const users = await getUsers(filePath);
          res.status(200).json(users);
     } catch (err) {
          res.status(500).json({ message: err.message });
     }
};
export const getUserC = async (req, res) => {
     try {
          const index = +req.params.index;
          const users = await getUsers(filePath);
          res.status(200).json(users[index]);
     } catch (err) {
          res.status(500).json({ message: err.message });
     }
};
export const deleteUserC = async (req, res) => {
     try {
          const index = +req.params.index;
          const users = await getUsers(filePath);
          if (index >= users.length) {
               throw new Object({
                    errors: [{
                         value: `User with number ${index + 1}`,
                         msg: 'This user does not exist',
                         param: 'user',
                         location: 'body',
                    }],
               });
          }
          const removedUser = users[index];
          const newUsers = users.filter((_, i) => i !== index);
          writeFile(filePath, JSON.stringify(newUsers, undefined, 2));
          res.status(200).json(removedUser);
     } catch (err) {
          res.status(500).json(err);
     }
};
export const createUserC = async (req, res) => {
     try {
          const users = await getUsers(filePath);
          const user = req.body;
          const isUniqueUser = users.find((u) => u.userName === user.userName);
          if (isUniqueUser) {
               throw new Object({
                    errors: [{
                         value: user.userName,
                         msg: 'User exists',
                         param: 'userName',
                         location: 'body',
                    }],
               });
          }
          users.push(user);
          writeFile(filePath, JSON.stringify(users, undefined, 2));
          res.status(201).json(user);
     } catch (err) {
          res.status(500).json(err);
     }
};
