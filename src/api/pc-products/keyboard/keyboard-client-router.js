import express from 'express';
import {
     getKeyboardC, getKeyboardsC,
} from './keyboard-controller.js';
import expressValidation from '../../../utils/express-utils.js';

const keyboardRouter = express.Router();

keyboardRouter.get(
     '/',
     getKeyboardsC,
);

keyboardRouter.get(
     '/:id',
     expressValidation,
     getKeyboardC,
);

export default keyboardRouter;
