/* eslint-disable no-mixed-operators */
import express from 'express';
import { body, param } from 'express-validator';
import {
     createProductC, getProductC, getProductsC, deleteProductC,
} from './products-controller.js';
import expressValidation from '../../utils/express-utils.js';
import isLicenseKey from './products-validator.js';
import { errorAlphanumeric, errorLength, errorNotEmpty } from '../../utils/errors/constant-errors.js';

const router = express.Router();

router.get('/', getProductsC);

router.get(
     '/:index',
     param('index').toInt(),
     expressValidation,
     getProductC,
);

router.delete(
     '/:index',
     param('index').toInt(),
     expressValidation,
     deleteProductC,
);

router.post(
     '/',
     body('videoGameName').notEmpty().withMessage(errorNotEmpty('videoGameName')).isLength({ min: 2, max: 30 })
          .withMessage(errorLength(2, 3))
          .isAlphanumeric('en-US', { ignore: ' _-' })
          .withMessage(errorAlphanumeric),
     body('platform').notEmpty().withMessage(errorNotEmpty('platform')).isIn(['ps4', 'PS4', 'ps3', 'PS3', 'xbox', 'XBOX', 'windows', 'WINDOWS'])
          .withMessage('this platform is not supported'),
     body('developers').notEmpty().withMessage(errorNotEmpty('developers')).isAlphanumeric('en-US', { ignore: ' -' })
          .withMessage(errorAlphanumeric),
     body('releaseDate').notEmpty().withMessage(errorNotEmpty('releaseData')).isInt({ min: 2000, max: 2022 })
          .withMessage('Wrong release year'),
     body('productPriceInUSD').notEmpty().withMessage(errorNotEmpty('productPriceInUSD')).isInt({ min: 10 })
          .withMessage('Enter the correct amount ( "The amount must be at least $10" )'),
     isLicenseKey,
     expressValidation,
     createProductC,
);

export default router;
