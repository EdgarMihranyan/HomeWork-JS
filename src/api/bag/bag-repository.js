/* eslint-disable max-len */
import Bag from '../../models/product-bag-model.js';

export const getUserBagsR = async (userId) => Bag.find({ userId });
export const getBagByUserIdProductIdR = async (userId, productId) => Bag.find({ userId, productId });
export const updateBag = async (id, prodUpd) => Bag.updateOne({ _id: id }, { $set: prodUpd });
export const createBagR = async (userId, productId) => new Bag({ userId, productId }).save();
