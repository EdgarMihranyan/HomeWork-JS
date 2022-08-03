import mongoose from 'mongoose';

const { Schema } = mongoose;

const VideoCardSchema = new Schema({
     brand: String,
     modelName: String,
     generation: String,
     productPriceInUSD: Number,

});

const VideoCard = mongoose.model('Ps/Video Card', VideoCardSchema);
export default VideoCard;
