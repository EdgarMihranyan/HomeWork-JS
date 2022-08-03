/* eslint-disable max-len */
import {
     createHeadphonesS, deleteHeadphonesS, getHeadphonesS, getHeadphonessS, updateHeadphonesS,
} from './headphones-service.js';

export const getHeadphonessC = async (req, res, next) => {
     try {
          const got = await getHeadphonessS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getHeadphonesC = async (req, res, next) => {
     try {
          const got = await getHeadphonesS(req.params.id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteHeadphonesC = async (req, res, next) => {
     try {
          await deleteHeadphonesS(req.params.id);
          res.status(200).json({ message: 'Headphones deleted' });
     } catch (err) {
          next(err);
     }
};
export const createHeadphonesC = async (req, res, next) => {
     try {
          await createHeadphonesS(req.body);
          res.status(201).json({ message: 'Headphones created' });
     } catch (err) {
          next(err);
     }
};
export const updateHeadphonesC = async (req, res, next) => {
     try {
          const { body, params } = req;
          await updateHeadphonesS(params.id, body);
          res.status(201).json({ message: 'Headphones updated' });
     } catch (err) {
          next(err);
     }
};
