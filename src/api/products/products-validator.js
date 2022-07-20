/* eslint-disable no-prototype-builtins */
/* eslint-disable no-mixed-operators */
import { body, param } from 'express-validator';
import expressValidation from '../../utils/express-utils.js';

import {
     errorAlphanumeric, errorLength, errorNotEmpty, errorUUID,
} from '../../constants/constant-errors.js';
import { ValidatorError } from '../../utils/custom-errors.js';

export const checkLicenseKeyV = (req, res, next) => {
     if (!req.body.licenseKey) return next();

     const key = req.body.licenseKey;
     let checkKey = req.body.licenseKey.toLowerCase();
     for (let i = 0; i < checkKey.length; i += 1) {
          const latterOrNum = checkKey[i];
          if (!(latterOrNum >= 'a' && latterOrNum <= 'z' || parseFloat(latterOrNum) >= 0 && parseFloat(latterOrNum) <= 9 || latterOrNum === ' ')) {
               throw new ValidatorError(400, key, errorAlphanumeric);
          }
     }

     checkKey = checkKey.replaceAll(' ', '-').toUpperCase();
     if (checkKey.length !== 24) {
          throw new ValidatorError(400, key, 'Defective key');
     }
     req.body.licenseKey = checkKey;
     return next();
};
export const isCorrectPropertyPV = (prop) => {
     const typeSchema = {
          videoGameName: null,
          developers: null,
          platform: null,
          releaseDate: null,
          productPriceInUSD: null,

     };
     Object.keys(prop).forEach((key) => {
          if (!typeSchema.hasOwnProperty(key)) throw new ValidatorError(404, key, 'Property not a found');
     });
};
export const isCorrectCategoryV = (req, res, next) => {
     const { body: reqBody } = req;
     const typeSchema = {
          videoGameName: null,
          developers: null,
          platform: null,
          releaseDate: null,
          productPriceInUSD: null,

     };
     Object.keys(reqBody).forEach((key) => {
          if (!typeSchema.hasOwnProperty(key)) next(new ValidatorError(404, key, 'Property not a found'));
     });
     next();
};
export const validateCreateProduct = [
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
     expressValidation,
];

export const validateUpdateProduct = [
     param('id').isMongoId().withMessage(errorUUID),
     body('videoGameName').notEmpty().withMessage(errorNotEmpty('videoGameName')).isLength({ min: 2, max: 30 })
          .withMessage(errorLength(2, 30))
          .isAlphanumeric('en-US', { ignore: ' _-' })
          .withMessage(errorAlphanumeric)
          .optional(),
     body('platform').notEmpty().withMessage(errorNotEmpty('platform')).isIn(['ps4', 'PS4', 'ps3', 'PS3', 'xbox', 'XBOX', 'windows', 'WINDOWS'])
          .withMessage('this platform is not supported')
          .optional(),
     body('developers').notEmpty().withMessage(errorNotEmpty('developers')).isAlphanumeric('en-US', { ignore: ' -' })
          .withMessage(errorAlphanumeric)
          .optional(),
     body('releaseDate').notEmpty().withMessage(errorNotEmpty('releaseData')).isInt({ min: 2000, max: 2022 })
          .withMessage('Wrong release year')
          .optional(),
     body('productPriceInUSD').notEmpty().withMessage(errorNotEmpty('productPriceInUSD')).isInt({ min: 10 })
          .withMessage('Enter the correct amount ( "The amount must be at least $10" )')
          .optional(),
     expressValidation,
];
export const validateIdProduct = [param('id').isMongoId().withMessage(errorUUID), expressValidation];
