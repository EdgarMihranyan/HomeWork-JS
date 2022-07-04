/* eslint-disable no-unused-vars */
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './api/users/users-router.js';
import productRouter from './api/products/products-router.js';
import { keys } from './config/keys.js';

mongoose.connect(keys.mongoURI)
     .then(() => {
          console.log('MongoDB connected ...');
     })
     .catch((err) => console.log(err.message));

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

app.use((err, req, res, next) => {
     console.log(err);
     res.status(err.statusCode).json({ errors: [{ ...err }] });
});

export default app;
