/* eslint-disable no-new-object */
/* eslint-disable no-mixed-operators */
const checkLicenseKey = (req, res, next) => {
     let checkKey = req.body.licenseKey.toLowerCase();
     for (let i = 0; i < checkKey.length; i++) {
          const latterOrNum = checkKey[i];
          if (!(latterOrNum >= 'a' && latterOrNum <= 'z' || parseFloat(latterOrNum) >= 0 && parseFloat(latterOrNum) <= 9 || latterOrNum === ' ')) {
               throw new Object({
                    errors: [{
                         value: req.body.licenseKey,
                         msg: 'Defective key',
                         param: 'product',
                         location: 'body',
                    }],
               });
          }
     }
     checkKey = checkKey.replaceAll(' ', '-').toUpperCase();
     if (checkKey.length !== 24) {
          throw new Object({
               errors: [{
                    value: req.body.licenseKey,
                    msg: 'Incorrect number of key characters',
                    param: 'product',
                    location: 'body',
               }],
          });
     }
     req.body.licenseKey = checkKey;
     next();
};
export default checkLicenseKey;
