import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
     firstName: String,
     lastName: String,
     password: String,
     email: String,
     age: Number,
     isVerifiedEmail: {
          type: Boolean,
          default: false,
     },
     isAdmin: {
          type: Boolean,
          default: false,
     },
     additional: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user-additions',
     },
});

const User = mongoose.model('users', UserSchema);
export default User;
