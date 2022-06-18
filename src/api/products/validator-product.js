/* eslint-disable no-mixed-operators */
const checkProperty = (prop) => {
     const typeProp = {
          videoGameName: true,
          platform: true,
          developers: true,
          releaseDate: true,
          licenseKey: true,
          productPriceInUSD: true,
     };
     if (Object.keys(typeProp).join('') !== Object.keys(prop).join('')) {
          throw new Error('Unknown property\'s');
     }
};
const checkName = (name) => {
     const nameCheck = name.toLowerCase();
     for (let i = 0; i < nameCheck.length; i++) {
          const latterOrNum = nameCheck[i];
          if (!(latterOrNum >= 'a' && latterOrNum <= 'z' || parseFloat(latterOrNum) >= 0 && parseFloat(latterOrNum) <= 9 || latterOrNum === ' ')) {
               console.log(nameCheck);
               throw new Error('Name must contain letters and numbers');
          }
     }
     return name;
};
const checkPlatform = (platformName) => {
     const platformNameCheck = platformName.toUpperCase();
     const platforms = {
          PS4: true,
          PS3: true,
          WINDOWS: true,
          XBOX: true,
     };
     if (!(platformNameCheck in platforms)) {
          throw new Error('Name must contain letters and numbers');
     }
     return platformNameCheck;
};
const checkReleaseDate = (year) => {
     const yearCheck = parseFloat(year);
     if (!(yearCheck > 2010 && yearCheck < 2022)) {
          throw new Error('Release year does not match');
     }
     return yearCheck;
};
const checkLicenseKey = (key) => {
     let checkKey = key.toLowerCase();
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
     return checkKey;
};
const checkPrice = (price) => {
     const priceCheck = parseFloat(price);
     if (priceCheck < 0) {
          throw new Error('price Error');
     }
     return price;
};

const validatorProductData = (req, res, next) => {
     try {
          const {
               videoGameName, platform, developers, releaseDate, licenseKey, productPriceInUSD,
          } = req.body;
          checkProperty(req.body);
          checkName(videoGameName);
          checkPlatform(platform);
          checkName(developers);
          checkReleaseDate(releaseDate);
          checkLicenseKey(licenseKey);
          checkPrice(productPriceInUSD);
          next();
     } catch (err) {
          next(err);
     }
};
export default validatorProductData;
