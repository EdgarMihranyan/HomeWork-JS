import express from 'express';
import { getUserBagsC, addProductToBagC } from './bag-controller.js';
import { validateIdBagProduct } from './bag-validation.js';

const bagRouter = express.Router();

bagRouter.get('/', getUserBagsC);
bagRouter.post('/', ...validateIdBagProduct, addProductToBagC);
export default bagRouter;
