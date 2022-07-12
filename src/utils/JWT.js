import jwt from 'jsonwebtoken';

const secret = 'vesemir';

export const signJWT = (data, expiresIn) => jwt.sign(data, secret, { expiresIn });
export const verificationJWT = async (token) => {
     const decoded = jwt.verify(token, secret);
     return decoded;
};
export const messageJWT = (email, token) => ({
     from: 'Amazon company <claude.zboncak85@ethereal.email>',
     to: email,
     subject: 'Verification message',
     html: `Click here to sign up =======> ${token}`,
});
