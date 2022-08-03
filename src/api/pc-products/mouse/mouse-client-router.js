import express from 'express';
import {
     getMouseC, getMousesC,
} from './mouse-controller.js';
import expressValidation from '../../../utils/express-utils.js';

const mouseRouter = express.Router();

mouseRouter.get(
     '/',
     getMousesC,
);

mouseRouter.get(
     '/:id',
     expressValidation,
     getMouseC,
);

export default mouseRouter;
