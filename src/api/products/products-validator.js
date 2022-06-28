/* eslint-disable no-mixed-operators */
import { errorAlphanumeric } from '../../constants/constant-errors.js';
import { ValidatorError } from '../../utils/custom-errors.js';

const checkLicenseKeyV = (req, res, next) => {
     if (!req.body.licenseKey) return next();

     const key = req.body.licenseKey;
     let checkKey = req.body.licenseKey.toLowerCase();
     for (let i = 0; i < checkKey.length; i++) {
          const latterOrNum = checkKey[i];
          if (!(latterOrNum >= 'a' && latterOrNum <= 'z' || parseFloat(latterOrNum) >= 0 && parseFloat(latterOrNum) <= 9 || latterOrNum === ' ')) {
               throw new ValidatorError(400, key, errorAlphanumeric);
          }
     }

     checkKey = checkKey.replaceAll(' ', '-').toUpperCase();
     if (checkKey.length !== 24) {
          throw new ValidatorError(400, key, 'Defective key');
     }
     req.body.licenseKey = checkKey;
     return next();
};
export default checkLicenseKeyV;
