import express from 'express';
import { body, param } from 'express-validator';
import expressValidation from '../../utils/express-utils.js';
import {
     getUserC, getUsersC, createUserC, deleteUserC,
} from './users-controller.js';

const router = express.Router();

router.get('/', expressValidation, getUsersC);

router.get('/:index', param('index').toInt(), expressValidation, getUserC);

router.delete('/:index', param('index').toInt(), expressValidation, deleteUserC);

router.post(
     '/',
     body('userName').notEmpty().withMessage('Username cannot be empty').isLength({ min: 2, max: 20 })
          .withMessage('must be from 2 to 20 length')
          .isAlphanumeric('en-US')
          .withMessage('must contains only letters and numbers'),
     body('firstName').notEmpty().withMessage('First name cannot be empty').isLength({ min: 2, max: 15 })
          .withMessage('must be from 2 to 15 length')
          .isAlpha('en-US')
          .withMessage('must contains only letters'),
     body('lastName').notEmpty().withMessage('Last name cannot be empty').isLength({ min: 3, max: 15 })
          .withMessage('must be from 3 to 15 length')
          .isAlpha('en-US')
          .withMessage('must contains only letters'),
     body('password').notEmpty().withMessage('Password cannot be empty').isLength({ min: 8, max: 20 })
          .withMessage('must be from 8 to 20 length')
          .isAlphanumeric('en-US')
          .withMessage('must contains only letters'),
     body('EmailAddress').notEmpty().withMessage('Email address cannot be empty').isEmail()
          .withMessage('Incorrect email address'),
     body('age').notEmpty().withMessage('Age cannot be empty').isInt({ min: 18, max: 120 })
          .withMessage('Incorrect age'),
     expressValidation,
     createUserC,
);
router.patch('/:index');

export default router;
