import express from 'express';
import { body } from 'express-validator';
import {
     errorAlpha,
     errorAlphanumeric, errorEmail, errorLength, errorNotEmpty, errorJWT,
} from '../../constants/constant-errors.js';
import expressValidation from '../../utils/express-utils.js';
import {
     signInC, signUpC, verifyEmailC, forgotPasswordC, changeByEmailPasswordC,
} from './auth-controller.js';
import { isCorrectPropertyAV } from './auth-validator.js';

const router = express.Router();

router.post(
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
router.post(
     '/signup',
     isCorrectPropertyAV,
     body('firstName').notEmpty().withMessage(errorNotEmpty('firstName')).isLength({ min: 2, max: 15 })
          .withMessage(errorLength(2, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha)
          .optional(),
     body('lastName').notEmpty().withMessage(errorNotEmpty('lastName')).isLength({ min: 3, max: 15 })
          .withMessage(errorLength(3, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha)
          .optional(),
     body('email').notEmpty().withMessage(errorNotEmpty('email')).isEmail()
          .withMessage(errorEmail)
          .optional(),
     body('password').notEmpty().withMessage(errorNotEmpty('password')).isLength({ min: 8, max: 20 })
          .withMessage(errorLength(8, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlphanumeric)
          .optional(),
     body('job').notEmpty().withMessage(errorNotEmpty('job')),
     body('age').notEmpty().withMessage(errorNotEmpty('age')),
     body('gender').notEmpty().withMessage(errorNotEmpty('gender')),
     body('blood').notEmpty().withMessage(errorNotEmpty('blood')).optional(),
     expressValidation,
     signUpC,
);

router.post(
     '/verify',
     body('token').notEmpty().withMessage(errorNotEmpty('Email')).isJWT()
          .withMessage(errorJWT),
     expressValidation,
     verifyEmailC,
);
router.post(
     '/forgot',
     body('email').notEmpty().withMessage(errorNotEmpty('Email')).isEmail()
          .withMessage(errorEmail),
     expressValidation,
     forgotPasswordC,
);
router.post(
     '/changforgot',
     body('token').notEmpty().withMessage(errorNotEmpty('Email')).isJWT()
          .withMessage(errorJWT),
     body('password').notEmpty().withMessage(errorNotEmpty('password')).isLength({ min: 8, max: 20 })
          .withMessage(errorLength(8, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlpha),
     expressValidation,
     changeByEmailPasswordC,
);
export default router;
