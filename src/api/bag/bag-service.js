import {
     updateBag, getUserBagsR, createBagR, getBagByUserIdProductIdR,
} from './bag-repository.js';

export const getUserBagsS = async (userId) => {
     const userBag = await getUserBagsR(userId);
     return userBag;
};

export const getBagByUserIdProductIdS = async (userId, productId) => {
     const userBag = await getBagByUserIdProductIdR(userId, productId);
     return userBag[0];
};

export const addProductToBagS = async (userId, productId) => {
     const existingBag = await getBagByUserIdProductIdS(userId, productId);
     if (existingBag) {
          await updateBag(existingBag.id, { count: existingBag.count + 1 });
          return true;
     }
     await createBagR(userId, productId);
     return true;
};
