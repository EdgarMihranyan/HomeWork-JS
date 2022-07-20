import express from 'express';
import { isCorrectPropertyUV, validateIdUser, validateUpdateUser } from './user-validator.js';
import {
     getUserC, getUsersC, deleteUserC, updateUserC,
} from './users-controller.js';

const router = express.Router();

router.get('/', getUsersC);

router.get('/:id', ...validateIdUser, getUserC);

router.delete('/:id', ...validateIdUser, deleteUserC);

router.patch('/:id', ...validateUpdateUser, isCorrectPropertyUV, updateUserC);

export default router;
