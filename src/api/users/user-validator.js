/* eslint-disable no-prototype-builtins */
/* eslint-disable import/prefer-default-export */
import { param } from 'express-validator';
import {
     errorUUID,
} from '../../constants/constant-errors.js';
import expressValidation from '../../utils/express-utils.js';

export const validateIdUser = [
     param('id').isMongoId().withMessage(errorUUID), expressValidation,
];
