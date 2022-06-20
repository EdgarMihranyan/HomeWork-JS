import express from 'express';
import userRouter from './api/users/users-router.js';
import productRouter from './api/products/products-router.js';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
     console.log(err.message);
     res.status(500).send(JSON.stringify({ errors: err.message }));
});
export default app;
