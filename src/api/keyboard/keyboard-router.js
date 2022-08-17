import express from 'express';
import {
     createKeyboardC, deleteKeyboardC, updateKeyboardC,
} from './keyboard-controller.js';

import {
     isCorrectCategoryV, validateCreateKeyboardV, validateIdKeyboardV, validateUpdateKeyboardV,
} from './keyboard-validator.js';

const keyboardRouter = express.Router();

keyboardRouter.post('/', ...validateCreateKeyboardV, isCorrectCategoryV, createKeyboardC);

keyboardRouter.patch('/:id', ...validateUpdateKeyboardV, isCorrectCategoryV, updateKeyboardC);

keyboardRouter.delete('/:id', ...validateIdKeyboardV, deleteKeyboardC);

export default keyboardRouter;
