/* eslint-disable no-mixed-operators */
import { join } from 'path';
import express from 'express';
import { readFile, writeFile } from '../../utils/fs-promise.js';
import validatorProductData from './validator-product.js';

const router = express.Router();
const filePath = join('C:/Users/EDGAR/Documents/GitHub/HomeWork-JS/src/api/products', 'products.json');

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

router.post('/', validatorProductData, async (req, res) => {
     try {
          const products = await getProducts(filePath);
          const product = req.body;
          products.push(product);
          writeFile(filePath, JSON.stringify(products, undefined, 2));
          res.status(201).send(JSON.stringify(req.body, undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
});

export default router;
