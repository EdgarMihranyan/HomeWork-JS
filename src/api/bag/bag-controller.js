import { addProductToBagS, getUserBagsS } from './bag-service.js';

export const getUserBagsC = async (req, res, next) => {
     try {
          const got = await getUserBagsS(req.user.id);
          res.status(201).json(got);
     } catch (err) {
          next(err);
     }
};
export const addProductToBagC = async (req, res, next) => {
     try {
          const { body, user } = req;
          await addProductToBagS(user.id, body.productId);
          res.status(201).json({ message: 'Product added your bag' });
     } catch (err) {
          next(err);
     }
};
