import express from 'express';
import headphonesRouter from '../pc-products/headphones/headphones-router.js';
import keyboardRouter from '../pc-products/keyboard/keyboard-router.js';
import monitorRouter from '../pc-products/monitor/monitor-router.js';
import mouseRouter from '../pc-products/mouse/mouse-router.js';
import videoCardRouter from '../pc-products/video-card/video-card-router.js';
import { getPcProductsC, createPcC } from './pc-controller.js';

const pcRouter = express.Router();
// console.log('raouter');
pcRouter.get('/', getPcProductsC);
pcRouter.post('/', createPcC);
pcRouter.post('/monitor', monitorRouter);
pcRouter.post('/video-card', videoCardRouter);
pcRouter.post('/keyboard', keyboardRouter);
pcRouter.post('/headphones', headphonesRouter);
pcRouter.post('/mouse', mouseRouter);

export default pcRouter;
