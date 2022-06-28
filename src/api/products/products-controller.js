import {
     createProductS, deleteProductS, getProductsS, updateProductS,
} from './products-server.js';

export const getProductsC = async (req, res, next) => {
     try {
          const getter = getProductsS();
          res.status(200).json(getter);
     } catch (err) {
          next(err);
     }
};

export const getProductC = async (req, res, next) => {
     try {
          const { index } = req.params;
          const getter = await getProductsS(index);
          res.status(200).json(getter[index]);
     } catch (err) {
          next(err);
     }
};

export const deleteProductC = async (req, res, next) => {
     try {
          const { index } = req.params;
          const deleted = await deleteProductS(index);
          res.status(200).json(deleted);
     } catch (err) {
          next(err);
     }
};

export const createProductC = async (req, res, next) => {
     try {
          const { body } = req;
          const created = await createProductS(body);
          res.status(201).json(created);
     } catch (err) {
          next(err);
     }
};
export const updateProductC = async (req, res, next) => {
     try {
          const { body, param } = req;
          const updated = await updateProductS(body, param.index);
          res.status(201).json(updated);
     } catch (err) {
          next(err);
     }
};
