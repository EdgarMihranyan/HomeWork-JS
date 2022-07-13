/* eslint-disable no-unused-vars */
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './api/users/users-router.js';
import productRouter from './api/products/products-router.js';
import authRouter from './api/auth/auth-router.js';
import { keys } from './config/keys.js';
import createAdmin from './utils/create-admin.js';
import { authorization, isAdminChanges } from './utils/auth-middleware.js';

mongoose.connect(keys.mongoURI)
     .then(() => {
          createAdmin();
          console.log('MongoDB connected ...');
     })
     .catch((err) => console.log(err.message));

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', authorization, isAdminChanges, userRouter);
app.use('/products', authorization, isAdminChanges, productRouter);

app.use((err, req, res, next) => {
     console.log(err);
     res.status(err.statusCode || 404).json({ errors: [{ ...err }] });
});

export default app;
