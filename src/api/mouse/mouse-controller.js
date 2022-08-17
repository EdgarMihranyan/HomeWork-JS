/* eslint-disable max-len */
import {
     createMouseS, deleteMouseS, getMouseS, getMousesS, updateMouseS,
} from './mouse-service.js';

export const getMousesC = async (req, res, next) => {
     try {
          const got = await getMousesS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getMouseC = async (req, res, next) => {
     try {
          const got = await getMouseS(req.params.id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteMouseC = async (req, res, next) => {
     try {
          await deleteMouseS(req.params.id);
          res.status(200).json({ message: 'Mouse deleted' });
     } catch (err) {
          next(err);
     }
};
export const createMouseC = async (req, res, next) => {
     try {
          await createMouseS(req.body);
          res.status(201).json({ message: 'Mouse created' });
     } catch (err) {
          next(err);
     }
};
export const updateMouseC = async (req, res, next) => {
     try {
          const { body, params } = req;
          await updateMouseS(params.id, body);
          res.status(201).json({ message: 'Mouse updated' });
     } catch (err) {
          next(err);
     }
};
