/* eslint-disable max-len */
import {
     createKeyboardS, deleteKeyboardS, getKeyboardS, getKeyboardsS, updateKeyboardS,
} from './keyboard-service.js';

export const getKeyboardsC = async (req, res, next) => {
     try {
          const got = await getKeyboardsS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getKeyboardC = async (req, res, next) => {
     try {
          const got = await getKeyboardS(req.params.id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteKeyboardC = async (req, res, next) => {
     try {
          await deleteKeyboardS(req.params.id);
          res.status(200).json({ message: 'Keyboard deleted' });
     } catch (err) {
          next(err);
     }
};
export const createKeyboardC = async (req, res, next) => {
     try {
          await createKeyboardS(req.body);
          res.status(201).json({ message: 'Keyboard created' });
     } catch (err) {
          next(err);
     }
};
export const updateKeyboardC = async (req, res, next) => {
     try {
          const { body, params } = req;
          await updateKeyboardS(params.id, body);
          res.status(201).json({ message: 'Keyboard updated' });
     } catch (err) {
          next(err);
     }
};
