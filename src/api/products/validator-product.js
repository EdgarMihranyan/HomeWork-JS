/* eslint-disable no-mixed-operators */
const checkLicenseKey = (req, res, next) => {
     let checkKey = req.body.licenseKey.toLowerCase();
     for (let i = 0; i < checkKey.length; i++) {
          const latterOrNum = checkKey[i];
          if (!(latterOrNum >= 'a' && latterOrNum <= 'z' || parseFloat(latterOrNum) >= 0 && parseFloat(latterOrNum) <= 9 || latterOrNum === ' ')) {
               throw new Error('Name must contain letters and numbers');
          }
     }
     checkKey = checkKey.replaceAll(' ', '-').toUpperCase();
     if (checkKey.length !== 24) {
          throw new Error('Defective key');
     }
     req.body.licenseKey = checkKey;
     next();
};
export default checkLicenseKey;
