/* eslint-disable no-underscore-dangle */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile, writeFile } from '../../utils/fs-promise.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = resolve(__dirname, 'products.json');

const getProducts = async (path) => {
     const products = await readFile(path);
     // console.log('products', JSON.parse(products));
     return JSON.parse(products);
};
export const getProductsC = async (req, res) => {
     try {
          const products = await getProducts(filePath);
          res.status(200).send(JSON.stringify(products, undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
};

export const getProductC = async (req, res) => {
     try {
          const i = Number(req.params.index);
          const products = await getProducts(filePath);
          res.status(200).send(JSON.stringify(products[i], undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
};

export const deleteProductC = async (req, res) => {
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
};

export const createProductC = async (req, res) => {
     try {
          const products = await getProducts(filePath);
          const product = req.body;
          products.push(product);
          writeFile(filePath, JSON.stringify(products, undefined, 2));
          res.status(201).send(JSON.stringify(req.body, undefined, 2));
     } catch (err) {
          res.status(500).send(JSON.stringify({ message: err.message }, undefined, 2));
     }
};
