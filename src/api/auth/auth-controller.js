import { signInS, signUpS, verificationS } from './auth-server.js';

export const signInC = async (req, res, next) => {
     try {
          const { body } = req;
          const resultMessage = await signInS(body);
          res.status(200).json(resultMessage);
     } catch (err) {
          next(err);
     }
};
export const signUpC = async (req, res, next) => {
     try {
          const { body } = req;
          const resultMessage = await signUpS(body);
          res.status(201).json(resultMessage);
     } catch (err) {
          next(err);
     }
};
export const verificationC = async (req, res, next) => {
     try {
          const { params } = req;
          console.log(params);
          const resultMessage = await verificationS(params);
          res.status(201).json(resultMessage);
     } catch (err) {
          next(err);
     }
};
