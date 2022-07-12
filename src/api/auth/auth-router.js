import express from 'express';
import { body, param } from 'express-validator';
import {
     errorAlpha,
     errorAlphanumeric, errorEmail, errorLength, errorNotEmpty,
} from '../../constants/constant-errors.js';
import expressValidation from '../../utils/express-utils.js';
import { signInC, signUpC, verificationC } from './auth-controller.js';

const authRouter = express.Router();

authRouter.post(
     '/signin',
     body('email').notEmpty().withMessage(errorNotEmpty('Email')).isEmail()
          .withMessage(errorEmail),
     body('password').notEmpty().withMessage(errorNotEmpty('password')).isLength({ min: 8, max: 20 })
          .withMessage(errorLength(8, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlphanumeric),
     expressValidation,
     signInC,
);
authRouter.post(
     '/signup',
     param('id')/* .isMongoId().withMessage(errorUUID) */,
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
          .withMessage(errorAlpha),
     body('job').notEmpty().withMessage(errorNotEmpty('job')).isLength({ min: 2, max: 20 })
          .withMessage(errorLength(2, 20))
          .isAlpha('en-US', { ignore: ' ,' }),
     expressValidation,
     signUpC,
);
authRouter.post(
     '/verification/:token',
     param('token').isJWT().withMessage('not a JWT'),
     expressValidation,
     verificationC,
);
export default authRouter;
