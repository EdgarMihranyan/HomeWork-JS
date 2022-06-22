import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ControllerError } from '../../utils/errors/custom-errors.js';
import { readFile, writeFile } from '../../utils/fs-promise.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);
const filePath = resolve(__dirName, 'users.json');

const getUsers = async (path) => {
     const users = await readFile(path);
     return JSON.parse(users);
};

export const getUsersC = async (req, res, next) => {
     try {
          const users = await getUsers(filePath);

          if (!users) throw new ControllerError(404, 'Users', 'The list is empty');

          res.status(200).json(users);
     } catch (err) {
          next(err);
     }
};
export const getUserC = async (req, res, next) => {
     try {
          const index = +req.params.index;
          const users = await getUsers(filePath);

          if (index >= users.length) throw new ControllerError(404, `${index}\` user`, 'User not a found');

          res.status(200).json(users[index]);
     } catch (err) {
          next(err);
     }
};
export const deleteUserC = async (req, res, next) => {
     try {
          const index = +req.params.index;
          const users = await getUsers(filePath);

          if (index >= users.length) throw new ControllerError(400, `${index}\` user`, 'User not a found');

          const removedUser = users[index];
          const newUsers = users.filter((_, i) => i !== index);

          writeFile(filePath, JSON.stringify(newUsers, undefined, 2));
          res.status(200).json(removedUser);
     } catch (err) {
          next(err);
     }
};
export const createUserC = async (req, res, next) => {
     try {
          const users = await getUsers(filePath);
          const user = req.body;
          const isUniqueUser = users.find((u) => u.userName === user.userName);

          if (isUniqueUser) throw new ControllerError(400, user.userName, 'User exists');

          users.push(user);
          writeFile(filePath, JSON.stringify(users, undefined, 2));
          res.status(201).json(user);
     } catch (err) {
          next(err);
     }
};
export const updateUserC = async (req, res, next) => {
     try {
          const users = await getUsers(filePath);
          const index = +req.params.index;
          if (index >= users.length) throw new ControllerError(404, `${index}\` user`, 'User not a found');
          const updateProps = req.body;
          Object.keys(updateProps).forEach((prop) => {
               const user = users[index];
               if (prop in user) {
                    user[prop] = updateProps[prop];
               } else {
                    throw new ControllerError(404, prop, 'This property not a found');
               }
          });
          writeFile(filePath, JSON.stringify(users, undefined, 2));
          res.status(201).json(users[index]);
     } catch (err) {
          next(err);
     }
};
