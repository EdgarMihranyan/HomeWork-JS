import mongoose from 'mongoose';

const { Schema } = mongoose;

const MouseSchema = new Schema({
     brand: String,
     modelName: String,
     color: String,
     productPriceInUSD: Number,

});

const Mouse = mongoose.model('Ps/Mouse', MouseSchema);
export default Mouse;
