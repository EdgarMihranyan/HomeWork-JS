/* eslint-disable import/prefer-default-export */
import { ValidatorError } from '../../utils/custom-errors.js';

export const isUniqueV = (prop, propList) => {
     const isUniqueUser = propList.find((props) => props.email === prop.email);

     if (isUniqueUser) throw new ValidatorError(400, prop.email, 'User exists');
};
