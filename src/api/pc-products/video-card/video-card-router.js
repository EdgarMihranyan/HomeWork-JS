import express from 'express';
import {
     createVideoCardC, deleteVideoCardC, updateVideoCardC,
} from './video-card-controller.js';

import {
     isCorrectCategoryV, validateCreateVideoCardV, validateIdVideoCardV, validateUpdateVideoCardV,
} from './video-card-validator.js';

const mouseRouter = express.Router();

mouseRouter.post('/', ...validateCreateVideoCardV, isCorrectCategoryV, createVideoCardC);

mouseRouter.patch('/:id', ...validateUpdateVideoCardV, isCorrectCategoryV, updateVideoCardC);

mouseRouter.delete('/:id', ...validateIdVideoCardV, deleteVideoCardC);

export default mouseRouter;
