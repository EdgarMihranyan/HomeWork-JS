import { hash, genSalt, compare } from 'bcrypt';
import 'dotenv/config';

export const toHashPassword = async (password) => {
     const salt = await genSalt(10);
     return hash(password, salt);
};

export const comparePassword = async (password, hashPassword) => compare(password, hashPassword);
