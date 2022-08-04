import express from 'express';
import {
     createVideoCardC, deleteVideoCardC, updateVideoCardC,
} from './video-card-controller.js';

import {
     isCorrectCategoryV, validateCreateVideoCardV, validateIdVideoCardV, validateUpdateVideoCardV,
} from './video-card-validator.js';

const videoCardRouter = express.Router();

videoCardRouter.post('/', ...validateCreateVideoCardV, isCorrectCategoryV, createVideoCardC);

videoCardRouter.patch('/:id', ...validateUpdateVideoCardV, isCorrectCategoryV, updateVideoCardC);

videoCardRouter.delete('/:id', ...validateIdVideoCardV, deleteVideoCardC);

export default videoCardRouter;
