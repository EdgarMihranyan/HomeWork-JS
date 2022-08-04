import { createPcS, getPcProductS, getPcProductsS } from './pc-service.js';

export const getPcProductsC = async (req, res, next) => {
     try {
          const got = await getPcProductsS(req.user.id);
          res.status(201).json(got);
     } catch (err) {
          next(err);
     }
};
export const getPcProductC = async (req, res, next) => {
     try {
          const got = await getPcProductS(req.body.productId);
          res.status(201).json(got);
     } catch (err) {
          next(err);
     }
};
export const createPcC = async (req, res, next) => {
     try {
          const createdPC = await createPcS(req.body);
          res.status(201).json(createdPC);
     } catch (err) {
          next(err);
     }
};
