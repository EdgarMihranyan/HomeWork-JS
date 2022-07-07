/* eslint-disable no-return-await */
/* eslint-disable max-len */
import { User } from '../../models/user-model.js';

export const getUsersR = async () => User.find();
export const getUserR = async (id) => User.findById(id);
export const getUserByEmailR = async (email) => User.find({ email });
export const deleteUserR = async (id) => User.remove({ _id: id });
export const updateUserR = async (id, userUpd) => await User.updateOne({ _id: id }, { $set: userUpd });
export const createUserR = async (user) => new User(user).save();
// export const createUserR = async (user) => User.insertMany([user]);
