import express from 'express';
import {
     signInC, signUpC, verifyEmailC, forgotPasswordC, changeByEmailPasswordC,
} from './auth-controller.js';
import {
     isCorrectPropertyAV, validateUserToken, validateSignUpUser,
     validateUserMail, validateUserPassword, validateSignInUser,
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

router.post(
     '/verify',
     ...validateUserToken,
     verifyEmailC,
);
router.post(
     '/forgot',
     ...validateUserMail,
     forgotPasswordC,
);
router.post(
     '/changforgot',
     ...validateUserPassword,
     changeByEmailPasswordC,
);
export default router;
