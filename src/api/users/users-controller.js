import {
     getUserS, getUsersS,
} from './users-service.js';

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
          const got = await getUserS(req.params.id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
