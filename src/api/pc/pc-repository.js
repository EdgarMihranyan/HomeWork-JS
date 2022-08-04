import Bag from '../../models/product-bag-model.js';

export const getPcProductsR = async () => Bag.find()
     .populate('headphones')
     .populate('keyboard')
     .populate('monitor')
     .populate('mouse')
     .populate('videoCard');

export const getPcProductR = async (productId) => Bag.find({ productId })
     .populate('headphones')
     .populate('keyboard')
     .populate('monitor')
     .populate('mouse')
     .populate('videoCard');
export const updatePcProductR = async (id, prodUpd) => Bag.updateOne(
     { id },
     { $set: prodUpd },
);
export const createPcR = async (products) => new Bag(products).save();
