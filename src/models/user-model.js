import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
     firstName: String,
     lastName: String,
     password: String,
     email: String,
     age: Number,
     job: String,
});

export const User = mongoose.model('users', UserSchema);
