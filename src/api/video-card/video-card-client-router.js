import express from 'express';
import {
     getVideoCardC, getVideoCardsC,
} from './video-card-controller.js';
import expressValidation from '../../utils/express-utils.js';

const videoCardRouter = express.Router();

videoCardRouter.get(
     '/',
     getVideoCardsC,
);

videoCardRouter.get(
     '/:id',
     expressValidation,
     getVideoCardC,
);

export default videoCardRouter;
