import Headphones from '../../../models/pc/headphones-model.js';

export const getHeadphonessR = async () => Headphones.find();
export const getHeadphonesR = async (id) => Headphones.findById(id);
export const deleteHeadphonesR = async (id) => Headphones.deleteOne({ _id: id });
export const updateHeadphonesR = async (id, headphonesUpd) => Headphones.updateOne(
     { _id: id },
     { $set: headphonesUpd },
);
export const createHeadphonesR = async (headphones) => new Headphones(headphones).save();
