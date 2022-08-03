import express from 'express';
import {
     getMonitorC, getMonitorsC,
} from './monitor-controller.js';
import expressValidation from '../../../utils/express-utils.js';

const monitorRouter = express.Router();

monitorRouter.get(
     '/',
     getMonitorsC,
);

monitorRouter.get(
     '/:id',
     expressValidation,
     getMonitorC,
);

export default monitorRouter;
