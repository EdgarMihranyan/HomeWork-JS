import express from 'express';
import {
     getHeadphonesC, getHeadphonessC,
} from './headphones-controller.js';
import expressValidation from '../../utils/express-utils.js';

const headphonesRouter = express.Router();

headphonesRouter.get(
     '/',
     getHeadphonessC,
);

headphonesRouter.get(
     '/:id',
     expressValidation,
     getHeadphonesC,
);

export default headphonesRouter;
