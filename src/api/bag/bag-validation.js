import { body } from 'express-validator';
import { errorNotEmpty, errorUUID } from '../../constants/constant-errors.js';
import expressValidation from '../../utils/express-utils.js';

export const validateIdBagProduct = [
     body('purchasedProduct').notEmpty().withMessage(errorNotEmpty('purchasedProduct')).isMongoId()
          .withMessage(errorUUID),
     expressValidation,
];
