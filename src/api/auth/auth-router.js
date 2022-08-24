import express from 'express';
import {
     signInC, signUpC,
} from './auth-controller.js';
import {
     isCorrectPropertyAV, validateSignUpUser,
     validateSignInUser,
} from './auth-validator.js';

const router = express.Router();

router.post(
     '/signin',
     ...validateSignInUser,
     signInC,
);
router.post(
     '/signup',
     ...validateSignUpUser,
     isCorrectPropertyAV,
     signUpC,
);
export default router;
