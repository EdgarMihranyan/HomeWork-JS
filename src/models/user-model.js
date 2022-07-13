import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
     firstName: String,
     lastName: String,
     password: String,
     email: String,
     age: Number,
     job: String,
     isMailVerification: {
          type: Boolean,
          default: false,
     },
     isAdmin: {
          type: Boolean,
          default: false,
     },
});

export const User = mongoose.model('users', UserSchema);
