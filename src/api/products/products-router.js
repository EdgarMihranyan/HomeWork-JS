import express from 'express';
import {
     createProductC, deleteProductC, updateProductC,
} from './products-controller.js';

import {
     isCorrectCategoryV, validateCreateProduct, validateIdProduct, validateUpdateProduct,
} from './products-validator.js';

const productRouter = express.Router();

productRouter.post('/', ...validateCreateProduct, isCorrectCategoryV, createProductC);

productRouter.patch('/:id', ...validateUpdateProduct, isCorrectCategoryV, updateProductC);

productRouter.delete('/:id', ...validateIdProduct, deleteProductC);

export default productRouter;
