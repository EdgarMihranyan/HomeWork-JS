import nodemailer from 'nodemailer';
import { ServerError } from './custom-errors.js';

const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 587,
     secure: false,
     auth: {
          user: 'mygameshopproject@gmail.com',
          pass: 'dpkqdqyhtytchcjx',
     },
});
const mailer = async (message) => {
     try {
          await transporter.sendMail(message);
     } catch (err) {
          throw new ServerError(400, 'Email', 'Email address error');
     }
};

export default mailer;
