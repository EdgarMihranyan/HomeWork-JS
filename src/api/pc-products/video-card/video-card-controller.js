/* eslint-disable max-len */
import {
     createVideoCardS, deleteVideoCardS, getVideoCardS, getVideoCardsS, updateVideoCardS,
} from './video-card-service.js';

export const getVideoCardsC = async (req, res, next) => {
     try {
          const got = await getVideoCardsS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getVideoCardC = async (req, res, next) => {
     try {
          const got = await getVideoCardS(req.params.id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteVideoCardC = async (req, res, next) => {
     try {
          await deleteVideoCardS(req.params.id);
          res.status(200).json({ message: 'Video Card deleted' });
     } catch (err) {
          next(err);
     }
};
export const createVideoCardC = async (req, res, next) => {
     try {
          await createVideoCardS(req.body);
          res.status(201).json({ message: 'Video Card created' });
     } catch (err) {
          next(err);
     }
};
export const updateVideoCardC = async (req, res, next) => {
     try {
          const { body, params } = req;
          await updateVideoCardS(params.id, body);
          res.status(201).json({ message: 'Video Card updated' });
     } catch (err) {
          next(err);
     }
};
