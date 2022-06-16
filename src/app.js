import express from 'express';
// eslint-disable-next-line import/no-unresolved
import userRouter from './api/users/users-router.js';
import productRouter from './api/products/products-router.js';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);

export default app;
