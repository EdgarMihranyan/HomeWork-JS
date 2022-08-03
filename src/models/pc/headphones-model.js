import mongoose from 'mongoose';

const { Schema } = mongoose;

const HeadphonesSchema = new Schema({
     brand: String,
     modelName: String,
     productPriceInUSD: Number,

});

const Headphones = mongoose.model('Ps/Headphones', HeadphonesSchema);
export default Headphones;
