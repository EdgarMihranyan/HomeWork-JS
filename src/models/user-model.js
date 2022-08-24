import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
     firstName: String,
     lastName: String,
     password: String,
     email: String,
     age: Number,
     job: String,
     address: String,
     gender: String,
     isVerifiedEmail: {
          type: Boolean,
          default: false,
     },
     isAdmin: {
          type: Boolean,
          default: false,
     },
});

const User = mongoose.model('users', UserSchema);
export default User;
