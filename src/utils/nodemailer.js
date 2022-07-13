import nodemailer from 'nodemailer';
import { ServerError } from './custom-errors.js';

const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 587,
     secure: false,
     auth: {
          user: '1mygameshopproject@gmail.com',
          pass: 'dpkqdqyhtytchcjx',
     },
});
const mailer = async (message) => {
     try {
          transporter.sendMail(message, (err, info) => {
               if (err) throw new ServerError(400, err.name, err.message);
               console.log(`Email sent\`
          ${JSON.stringify(info, undefined, 2)}`);
          });
     } catch (err) {
          console.log('aaaaaaaaaaaaaaa');
     }
};

export default mailer;
