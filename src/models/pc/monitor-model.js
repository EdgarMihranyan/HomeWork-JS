import mongoose from 'mongoose';

const { Schema } = mongoose;

const MonitorSchema = new Schema({
     brand: String,
     modelName: String,
     supportInHz: Number,
     productPriceInUSD: Number,

});

const Monitor = mongoose.model('Ps/Monitor', MonitorSchema);
export default Monitor;
