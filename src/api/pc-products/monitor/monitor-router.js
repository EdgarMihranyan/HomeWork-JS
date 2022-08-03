import express from 'express';
import {
     createMonitorC, deleteMonitorC, updateMonitorC,
} from './monitor-controller.js';

import {
     isCorrectCategoryV, validateCreateMonitorV, validateIdMonitorV, validateUpdateMonitorV,
} from './monitor-validator.js';

const monitorRouter = express.Router();

monitorRouter.post('/', ...validateCreateMonitorV, isCorrectCategoryV, createMonitorC);

monitorRouter.patch('/:id', ...validateUpdateMonitorV, isCorrectCategoryV, updateMonitorC);

monitorRouter.delete('/:id', ...validateIdMonitorV, deleteMonitorC);

export default monitorRouter;
