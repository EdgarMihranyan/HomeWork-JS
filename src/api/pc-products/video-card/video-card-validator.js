/* eslint-disable no-prototype-builtins */
/* eslint-disable no-mixed-operators */
import { body, param } from 'express-validator';
import expressValidation from '../../../utils/express-utils.js';

import {
     errorAlphanumeric, errorNotEmpty, errorUUID,
} from '../../../constants/constant-errors.js';
import { ValidatorError } from '../../../utils/custom-errors.js';

export const isCorrectPropertyPV = (prop) => {
     const typeSchema = {
          brand: null,
          modelName: null,
          generation: null,
          productPriceInUSD: null,

     };
     Object.keys(prop).forEach((key) => {
          if (!typeSchema.hasOwnProperty(key)) throw new ValidatorError(404, key, 'Property not a found');
     });
};
export const isCorrectCategoryV = (req, res, next) => {
     const { body: reqBody } = req;
     const typeSchema = {
          brand: null,
          modelName: null,
          generation: null,
          productPriceInUSD: null,

     };
     Object.keys(reqBody).forEach((key) => {
          if (!typeSchema.hasOwnProperty(key)) next(new ValidatorError(404, key, 'Property not a found'));
     });
     next();
};
export const validateCreateVideoCardV = [
     body('generation').notEmpty().withMessage(errorNotEmpty('generation'))
          .isAlphanumeric('en-US', { ignore: ' _-' })
          .withMessage(errorAlphanumeric),
     body('brand').notEmpty().withMessage(errorNotEmpty('brand')).isAlphanumeric('en-US', { ignore: ' _-' })
          .withMessage(errorAlphanumeric),
     body('modelName').notEmpty().withMessage(errorNotEmpty('modelName')).isAlphanumeric('en-US', { ignore: ' -_' })
          .withMessage(errorAlphanumeric),
     body('productPriceInUSD').notEmpty().withMessage(errorNotEmpty('productPriceInUSD')).isInt({ min: 10 })
          .withMessage('Enter the correct amount ( "The amount must be at least $10" )'),
     expressValidation,
];

export const validateUpdateVideoCardV = [
     param('id').isMongoId().withMessage(errorUUID),
     body('generation').notEmpty().withMessage(errorNotEmpty('generation'))
          .isAlphanumeric('en-US', { ignore: ' _-' })
          .withMessage(errorAlphanumeric)
          .optional(),
     body('brand').notEmpty().withMessage(errorNotEmpty('brand')).isAlphanumeric('en-US', { ignore: ' _-' })
          .withMessage(errorAlphanumeric)
          .optional(),
     body('modelName').notEmpty().withMessage(errorNotEmpty('modelName')).isAlphanumeric('en-US', { ignore: ' -_' })
          .withMessage(errorAlphanumeric)
          .optional(),
     body('productPriceInUSD').notEmpty().withMessage(errorNotEmpty('productPriceInUSD')).isInt({ min: 10 })
          .withMessage('Enter the correct amount ( "The amount must be at least $10" )')
          .optional(),
     expressValidation,
];
export const validateIdVideoCardV = [param('id').isMongoId().withMessage(errorUUID), expressValidation];
