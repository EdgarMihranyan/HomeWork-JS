/* eslint-disable no-new-object */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ControllerError } from '../../utils/errors/custom-errors.js';
import { readFile, writeFile } from '../../utils/fs-promise.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = resolve(__dirname, 'products.json');

const getProducts = async (path) => {
     const products = await readFile(path);
     return JSON.parse(products);
};
export const getProductsC = async (req, res) => {
     try {
          const products = await getProducts(filePath);
          res.status(200).json(products);
     } catch (err) {
          res.status(500).json({ message: err.message });
     }
};

export const getProductC = async (req, res) => {
     try {
          const index = +req.params.index;
          const products = await getProducts(filePath);
          res.status(200).json(products[index]);
     } catch (err) {
          res.status(500).json({ message: err.message });
     }
};

export const deleteProductC = async (req, res) => {
     try {
          const index = Number(req.params.index);
          const products = await getProducts(filePath);
          if (index >= products.length) {
               throw new Object({
                    errors: [{
                         value: `Product with number ${index + 1}`,
                         msg: 'This product does not exist',
                         param: 'product',
                         location: 'body',
                    }],
               });
          }
          const removedProduct = products[index];
          const newProducts = products.filter((_, i) => i !== index);
          writeFile(filePath, JSON.stringify(newProducts, undefined, 2));
          res.status(200).json(removedProduct);
     } catch (err) {
          res.status(500).json({ message: err.message });
     }
};

export const createProductC = async (req, res) => {
     try {
          const products = await getProducts(filePath);
          const product = req.body;
          products.push(product);
          writeFile(filePath, JSON.stringify(products, undefined, 2));
          res.status(201).json(req.body);
     } catch (err) {
          res.status(500).json({ message: err.message });
     }
};
export const updateProductC = async (req, res, next) => {
     try {
          console.log('aaaaaaaaa');
          const products = await getProducts(filePath);
          const index = +req.params.index;
          if (index >= products.length) throw new ControllerError(404, `${index}\` product`, 'Product not a found');
          const updateProps = req.body;
          Object.keys(updateProps).forEach((prop) => {
               const product = products[index];
               if (prop in product) {
                    product[prop] = updateProps[prop];
               } else {
                    throw new ControllerError(404, prop, 'This property not a found');
               }
          });
          writeFile(filePath, JSON.stringify(products, undefined, 2));
          res.status(201).json(products[index]);
     } catch (err) {
          next(err);
     }
};
