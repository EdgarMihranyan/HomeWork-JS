import mongoose from 'mongoose';

const { Schema } = mongoose;

const KeyboardSchema = new Schema({
     brand: String,
     modelName: String,
     productPriceInUSD: Number,

});

const Keyboard = mongoose.model('Ps/Keyboard', KeyboardSchema);
export default Keyboard;
