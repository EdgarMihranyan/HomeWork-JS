/* eslint-disable no-prototype-builtins */
import { body } from 'express-validator';
import {
     errorAlpha, errorAlphanumeric, errorEmail, errorLength, errorNotEmpty, errorNumber,
} from '../../constants/constant-errors.js';
import { ValidatorError } from '../../utils/custom-errors.js';
import expressValidation from '../../utils/express-utils.js';

export const isCorrectPropertyAV = (req, res, next) => {
     const prop = req.body;

     const typeSchema = {
          firstName: null,
          lastName: null,
          password: null,
          email: null,
          age: null,
          job: null,
          address: null,
          gender: null,
     };
     Object.keys(prop).forEach((key) => {
          if (!typeSchema.hasOwnProperty(key)) next(new ValidatorError(404, key, 'Property not a found'));
     });
     next();
};
export const validateSignUpUser = [
     body('firstName').notEmpty().withMessage(errorNotEmpty('firstName')).isLength({ min: 2, max: 15 })
          .withMessage(errorLength(2, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha),
     body('lastName').notEmpty().withMessage(errorNotEmpty('lastName')).isLength({ min: 3, max: 15 })
          .withMessage(errorLength(3, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha),
     body('email').notEmpty().withMessage(errorNotEmpty('email')).isEmail()
          .withMessage(errorEmail),
     body('password').notEmpty().withMessage(errorNotEmpty('password')).isLength({ min: 8, max: 20 })
          .withMessage(errorLength(8, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlphanumeric),
     body('job').notEmpty().withMessage(errorNotEmpty('job')),
     body('age').notEmpty().withMessage(errorNotEmpty('age')).isInt()
          .withMessage(errorNumber),
     body('gender').notEmpty().withMessage(errorNotEmpty('gender')),
     body('blood').notEmpty().withMessage(errorNotEmpty('blood')),
     expressValidation,
];

export const validateUserMail = [
     body('email').notEmpty().withMessage(errorNotEmpty('Email')).isEmail()
          .withMessage(errorEmail),
     expressValidation,
];
export const validateSignInUser = [
     body('email').notEmpty().withMessage(errorNotEmpty('Email')).isEmail()
          .withMessage(errorEmail),
     body('password').notEmpty().withMessage(errorNotEmpty('password')).isLength({ min: 8, max: 20 })
          .withMessage(errorLength(8, 20))
          .isAlphanumeric('en-US', { ignore: '._' })
          .withMessage(errorAlphanumeric),
     expressValidation,
];
