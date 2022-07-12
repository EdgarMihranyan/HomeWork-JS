import express from 'express';
import { body, param } from 'express-validator';
import {
     errorAlpha, errorLength, errorNotEmpty, errorUUID,
} from '../../constants/constant-errors.js';
import expressValidation from '../../utils/express-utils.js';
import {
     getUserC, getUsersC, createUserC, deleteUserC, updateUserC,
} from './users-controller.js';

const userRouter = express.Router();

userRouter.get('/', getUsersC);

userRouter.get('/:id', param('id').isMongoId().withMessage(errorUUID), expressValidation, getUserC);

userRouter.delete('/:id', param('id').isMongoId().withMessage(errorUUID), expressValidation, deleteUserC);

userRouter.post(
     '/',
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
     body('email').notEmpty().withMessage(errorNotEmpty('email')).isEmail()
          .withMessage('Incorrect email address'),
     expressValidation,
     createUserC,
);
userRouter.patch(
     '/:id',
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
     updateUserC,
);

export default userRouter;
