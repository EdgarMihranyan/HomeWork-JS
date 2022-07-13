import { getUserByEmailS } from '../api/users/users-server.js';
import { User } from '../models/user-model.js';

const adminEmail = 'admin.gosh@gmail.com';

const createAdmin = async () => {
     const admin = await getUserByEmailS(adminEmail);
     if (!admin) {
          new User({
               firstName: 'Gosh',
               lastName: 'Hayrapetyan',
               password: 12345,
               email: adminEmail,
               age: 28,
               job: 'BackEnd',
               isMailVerification: true,
               isAdmin: true,
          }).save();
          console.log('Admin ');
     }
};

export default createAdmin;
