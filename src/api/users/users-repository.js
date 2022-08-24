import User from '../../models/user-model.js';

export const getUsersR = async () => User.find();
export const getUserR = async (id) => User.findOne({ id });
export const getUserByEmailR = async (email) => User.findOne({ email });
export const createUserR = async (user) => new User(user).save();
