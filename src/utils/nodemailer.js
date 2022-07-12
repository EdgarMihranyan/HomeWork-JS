import nodemailer from 'nodemailer';
import { ServerError } from './custom-errors.js';

const transporter = nodemailer.createTransport({
     host: 'smtp.ethereal.email',
     port: 587,
     secure: false,
     auth: {
          user: 'claude.zboncak85@ethereal.email',
          pass: 'zkRUwBeGkyMeUSQUFW',
     },
});
const mailer = (message) => {
     transporter.sendMail(message, (err, info) => {
          if (err) throw new ServerError(400, '', 'My Error');
          console.log(`Email sent\`
          ${JSON.stringify(info, undefined, 2)}`);
     });
};

export default mailer;
