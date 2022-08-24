import express from 'express';
import { validateIdUser } from './user-validator.js';
import {
     getUserC, getUsersC,
} from './users-controller.js';

const router = express.Router();

router.get('/', getUsersC);

router.get('/:id', ...validateIdUser, getUserC);

export default router;
