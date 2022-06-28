/* eslint-disable no-new-object */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ServerError } from '../../utils/custom-errors.js';
import { readFile, writeFile } from '../../utils/fs-promise.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = resolve(__dirname, 'products.json');

export const getProductsS = async () => JSON.parse(await readFile(filePath));

export const getProductS = async (index) => {
     const products = await getProductsS(filePath);
     if (index >= products.length) throw new ServerError(404, `User ${index} `, 'User not a found');
     return products[index];
};
export const deleteProductS = async (index) => {
     const products = await getProductsS(filePath);

     if (index >= products.length) throw new ServerError(404, `User ${index} `, 'User not a found');

     const deletedProduct = products[index];
     const newProducts = products.filter((_, ind) => ind !== index);
     writeFile(filePath, JSON.stringify(newProducts, undefined, 2));

     return deletedProduct;
};
export const createProductS = async (product) => {
     const products = await getProductsS(filePath);
     products.push(product);
     writeFile(filePath, JSON.stringify(products, undefined, 2));
     return product;
};
export const updateProductS = async (updateProps, index) => {
     const products = await getProductS();
     if (index >= products.length) throw new ServerError(404, `Product ${index}`, 'Product not a found');
     Object.keys(updateProps).forEach((prop) => {
          const product = products[index];
          if (prop in product) {
               product[prop] = updateProps[prop];
          } else {
               throw new ServerError(404, prop, 'This property not a found');
          }
     });
     writeFile(filePath, JSON.stringify(products, undefined, 2));
     return products[index];
};
