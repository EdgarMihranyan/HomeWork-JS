import express from 'express';
import userRouter from './api/users/users-router.js';
import productRouter from './api/products/products-router.js';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

app.use((err, req, res, next) => {
     console.log(err.message);
});
export default app;
