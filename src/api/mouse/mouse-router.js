import express from 'express';
import {
     createMouseC, deleteMouseC, updateMouseC,
} from './mouse-controller.js';

import {
     isCorrectCategoryV, validateCreateMouseV, validateIdMouseV, validateUpdateMouseV,
} from './mouse-validator.js';

const mouseRouter = express.Router();

mouseRouter.post('/', ...validateCreateMouseV, isCorrectCategoryV, createMouseC);

mouseRouter.patch('/:id', ...validateUpdateMouseV, isCorrectCategoryV, updateMouseC);

mouseRouter.delete('/:id', ...validateIdMouseV, deleteMouseC);

export default mouseRouter;
