import {
     createPcR, getPcProductR, getPcProductsR, updatePcProductR,
} from './pc-repository.js';

export const getPcProductsS = async () => {
     const computers = await getPcProductsR();
     return computers;
};
export const getPcProductS = async (productId) => {
     const computer = await getPcProductR(productId);
     return computer;
};
export const updateProductS = async (productId, productUpd) => {
     const updatedProduct = await updatePcProductR(productId, productUpd);
     return updatedProduct;
};

export const createPcS = async (data) => {
     const userPc = await createPcR(data);
     return userPc;
};
