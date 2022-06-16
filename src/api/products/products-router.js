/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
import { join } from 'path';
import express from 'express';
import { readFile, writeFile } from '../../utils/fs-promise.js';

const router = express.Router();
const filePath = join('C:/Users/EDGAR/Documents/GitHub/HomeWork-JS/src/api/products', 'products.json');

const checkName = async (name) => {
     const nameCheck = name.toLowerCase();
     for (let i = 0; i < nameCheck.length; i++) {
          const latterOrNum = nameCheck[i];
          if (!(latterOrNum >= 'a' && latterOrNum <= 'z' || parseFloat(latterOrNum) >= 0 && parseFloat(latterOrNum) <= 9, latterOrNum === ' ')) {
               throw new Error('Name must contain letters and numbers');
          }
     }
     return name;
};
const checkPlatform = async (platformName) => {
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
const checkReleaseDate = async (year) => {
     const yearCheck = parseFloat(year);
     if (!(yearCheck > 2010 && yearCheck < 2022)) {
          throw new Error('Release year does not match');
     }
     return yearCheck;
};
const checkLicenseKey = async (key) => {
     let checkKey = key.toLowerCase();
     for (let i = 0; i < checkKey.length; i++) {
          const latterOrNum = checkKey[i];
          if (!(latterOrNum >= 'a' && latterOrNum <= 'z' || parseFloat(latterOrNum) >= 0 && parseFloat(latterOrNum) <= 9) || latterOrNum === ' ') {
               throw new Error('Name must contain letters and numbers');
          }
     }
     checkKey = checkKey.replaceAll(' ', '-').toUpperCase();
     if (checkKey.length !== 24) {
          throw new Error('Defective key');
     }
     return checkKey;
};
const checkPrice = async (price) => {
     const priceCheck = parseFloat(price);
     if (priceCheck < 0) {
          throw new Error('price Error');
     }
     return price;
};

const getProducts = async (path) => {
     const products = await readFile(path);
     return JSON.parse(products);
};

router.get('/', async (req, res) => {
     try {
          const products = await getProducts(filePath);
          res.status(200).send(JSON.stringify(products, undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
});

router.get('/:index', async (req, res) => {
     try {
          const i = Number(req.params.index);
          const products = await getProducts(filePath);
          res.status(200).send(JSON.stringify(products[i], undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
});

router.delete('/:index', async (req, res) => {
     try {
          const index = Number(req.params.index);
          const products = await getProducts(filePath);
          if (index >= products.length) {
               throw new Error('User not exists');
          }
          const removedProduct = products[index];
          const newProducts = products.filter((_, i) => i !== index);
          writeFile(filePath, JSON.stringify(newProducts, undefined, 2));
          res.status(200).send(JSON.stringify(removedProduct, undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
});

router.post('/', async (req, res) => {
     try {
          const products = await getProducts(filePath);
          console.log(req.body);
          const product = req.body;
          // await checkName(product.videoGameName);
          // await checkName(product.developers);
          // await checkLicenseKey(product.licenseKey);
          await checkPlatform(product.platform);
          await checkReleaseDate(product.releaseDate);
          await checkPrice(product.productPriceInUSD);
          products.push(product);
          writeFile(filePath, JSON.stringify(products, undefined, 2));
          res.status(201).send(JSON.stringify(req.body, undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
});

export default router;
