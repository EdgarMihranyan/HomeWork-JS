import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import userRouter from './api/users/users-router.js';
import authRouter from './api/auth/auth-router.js';

const app = express();

const ExpressMiddleware = () => {
     app.use(morgan('dev'));
     app.use(express.json());
};

const mongoConnection = async () => {
     const mongoURI = 'mongodb+srv://geralt:9797@geralt.7djrpvu.mongodb.net/?retryWrites=true&w=majority';
     try {
          await mongoose.connect(mongoURI);
          console.log('MongoDB connected ...');
     } catch (err) {
          console.log(err.message);
     }
};

const routing = () => {
     app.use('/auth', authRouter);

     app.use('/users', userRouter);
};

const errorHandling = () => {
     // eslint-disable-next-line no-unused-vars
     app.use((err, req, res, next) => {
          console.log(err);
          res.status(err.statusCode || 400).json({ errors: [{ ...err }] });
     });
};

const init = async () => {
     ExpressMiddleware();
     await mongoConnection();
     routing();
     errorHandling();
};

(async () => {
     await init();
})();

export default app;
