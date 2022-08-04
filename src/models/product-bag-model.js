import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
     userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users',
     },
     productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products',
     },
     count: {
          type: Number,
          default: 1,
     },

});
const Bag = mongoose.model('bag-products', ProductSchema);

export default Bag;
