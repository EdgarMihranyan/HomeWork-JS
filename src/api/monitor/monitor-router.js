import express from 'express';
import {
     createMonitorC, deleteMonitorC, updateMonitorC,
} from './monitor-controller.js';

import {
     validateCreateMonitorV, validateIdMonitorV, validateUpdateMonitorV,
} from './monitor-validator.js';

const monitorRouter = express.Router();
monitorRouter.post('/', ...validateCreateMonitorV, createMonitorC);

monitorRouter.patch('/:id', ...validateUpdateMonitorV, updateMonitorC);

monitorRouter.delete('/:id', ...validateIdMonitorV, deleteMonitorC);

export default monitorRouter;
