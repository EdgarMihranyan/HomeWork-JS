/* eslint-disable no-prototype-builtins */
/* eslint-disable import/prefer-default-export */
import { body, param } from 'express-validator';
import {
     errorAlpha, errorLength, errorNotEmpty, errorUUID,
} from '../../constants/constant-errors.js';
import expressValidation from '../../utils/express-utils.js';
import { ValidatorError } from '../../utils/custom-errors.js';

export const isUniqueV = (prop, propList) => {
     const isUniqueUser = propList.find((props) => props.email === prop.email);

     if (isUniqueUser) throw new ValidatorError(400, prop.email, 'User exists');
};
export const isCorrectPropertyUV = (req, res, next) => {
     const { body: reqBody } = req;

     const typeSchema = {
          firstName: null,
          lastName: null,
          password: null,
          email: null,
          age: null,
          job: null,
          gender: null,
          blood: null,

     };
     Object.keys(reqBody).forEach((key) => {
          if (!typeSchema.hasOwnProperty(key)) next(new ValidatorError(404, key, 'Property not a found'));
     });
     next();
};

export const validateUpdateUser = [
     param('id').isMongoId().withMessage(errorUUID),
     body('firstName').notEmpty().withMessage('First name cannot be empty').isLength({ min: 2, max: 15 })
          .withMessage(errorLength(2, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha)
          .optional(),
     body('lastName').notEmpty().withMessage(errorNotEmpty('lastName')).isLength({ min: 3, max: 15 })
          .withMessage(errorLength(3, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha)
          .optional(),
     body('password').notEmpty().withMessage(errorNotEmpty('password')).isLength({ min: 8, max: 20 })
          .withMessage(errorLength(8, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlpha)
          .optional(),
     body('email').notEmpty().withMessage(errorNotEmpty('email')).isEmail()
          .withMessage('Incorrect email address')
          .optional(),
     expressValidation,
];
export const validateIdUser = [
     param('id').isMongoId().withMessage(errorUUID), expressValidation,
];
