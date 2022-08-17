import express from 'express';
import { getPcProductsC, createPcC } from './pc-controller.js';

const pcRouter = express.Router();
// console.log('raouter');
pcRouter.get('/', getPcProductsC);
pcRouter.post('/', createPcC);

export default pcRouter;
