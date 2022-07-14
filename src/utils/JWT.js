import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET;

export const signJWT = (data, expiresIn) => jwt.sign(data, secret, { expiresIn });
export const verificationJWT = async (token) => jwt.verify(token, secret);
export const messageJWT = (email, subject, token) => ({
     from: 'Amazon company <claude.zboncak85@ethereal.email>',
     to: email,
     subject,
     html: `Click here to sign up =======> ${token}`,
});
