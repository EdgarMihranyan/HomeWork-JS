import express from 'express';
import {
     createHeadphonesC, deleteHeadphonesC, updateHeadphonesC,
} from './headphones-controller.js';

import {
     isCorrectCategoryV, validateCreateHeadphonesV,
     validateIdHeadphonesV, validateUpdateHeadphonesV,
} from './headphones-validator.js';

const headphonesRouter = express.Router();

headphonesRouter.post('/', ...validateCreateHeadphonesV, isCorrectCategoryV, createHeadphonesC);

headphonesRouter.patch('/:id', ...validateUpdateHeadphonesV, isCorrectCategoryV, updateHeadphonesC);

headphonesRouter.delete('/:id', ...validateIdHeadphonesV, deleteHeadphonesC);

export default headphonesRouter;
