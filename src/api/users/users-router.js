import express from 'express';
import { body, param } from 'express-validator';
import {
     errorAlpha, errorAlphanumeric, errorLength, errorNotEmpty,
} from '../../constants/constant-errors.js';
import expressValidation from '../../utils/express-utils.js';
import {
     getUserC, getUsersC, createUserC, deleteUserC, updateUserC,
} from './users-controller.js';

const router = express.Router();

router.get('/', expressValidation, getUsersC);

router.get('/:index', param('index').toInt(), expressValidation, getUserC);

router.delete('/:index', param('index').toInt(), expressValidation, deleteUserC);

router.post(
     '/',
     body('userName').notEmpty().withMessage(errorNotEmpty('userName')).isLength({ min: 2, max: 20 })
          .withMessage(errorLength(2, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlphanumeric),
     body('firstName').notEmpty().withMessage('First name cannot be empty').isLength({ min: 2, max: 15 })
          .withMessage(errorLength(2, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha),
     body('lastName').notEmpty().withMessage(errorNotEmpty('lastName')).isLength({ min: 3, max: 15 })
          .withMessage(errorLength(3, 15))
          .isAlpha('en-US')
          .withMessage(errorAlpha),
     body('password').notEmpty().withMessage(errorNotEmpty('password')).isLength({ min: 8, max: 20 })
          .withMessage(errorLength(8, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlpha),
     body('EmailAddress').notEmpty().withMessage(errorNotEmpty('EmailAddress')).isEmail()
          .withMessage('Incorrect email address'),
     body('age').notEmpty().withMessage(errorNotEmpty('age')).isInt({ min: 18, max: 120 })
          .withMessage('Incorrect age'),
     expressValidation,
     createUserC,
);
router.patch(
     '/:index',
     param('index').toInt(),
     body('userName').notEmpty().withMessage(errorNotEmpty('userName')).isLength({ min: 2, max: 20 })
          .withMessage(errorLength(2, 20))
          .isAlphanumeric('en-US')
          .withMessage(errorAlphanumeric)
          .optional(),
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
     body('EmailAddress').notEmpty().withMessage(errorNotEmpty('EmailAddress')).isEmail()
          .withMessage('Incorrect email address')
          .optional(),
     body('age').notEmpty().withMessage(errorNotEmpty('age')).isInt({ min: 18, max: 120 })
          .withMessage('Incorrect age')
          .optional(),
     expressValidation,
     updateUserC,
);

export default router;
