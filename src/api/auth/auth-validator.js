/* eslint-disable no-prototype-builtins */
import { ValidatorError } from '../../utils/custom-errors.js';

export const isCorrectPropertyAV = (req, res, next) => {
     const { body } = req;

     const typeSchema = {
          firstName: null,
          lastName: null,
          password: null,
          email: null,
          age: null,
          job: null,
          gender: null,
          blood: null,
     };
     Object.keys(body).forEach((key) => {
          if (!typeSchema.hasOwnProperty(key)) next(new ValidatorError(404, key, 'Property not a found'));
     });
     next();
};
