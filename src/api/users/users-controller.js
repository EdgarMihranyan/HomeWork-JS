import {
     createUserS, deleteUserS, getUserS, getUsersS, updateUserS,
} from './users-server.js';

export const getUsersC = async (req, res, next) => {
     try {
          const got = await getUsersS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getUserC = async (req, res, next) => {
     try {
          const got = await getUserS(req.params.index);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteUserC = async (req, res, next) => {
     try {
          const deleted = await deleteUserS(req.params.index);
          res.status(200).json(deleted);
     } catch (err) {
          next(err);
     }
};
export const createUserC = async (req, res, next) => {
     try {
          const created = await createUserS(req.body);
          res.status(201).json(created);
     } catch (err) {
          next(err);
     }
};
export const updateUserC = async (req, res, next) => {
     try {
          const { body, params } = req;
          const updated = await updateUserS(params.index, body);
          res.status(201).json(updated);
     } catch (err) {
          next(err);
     }
};
