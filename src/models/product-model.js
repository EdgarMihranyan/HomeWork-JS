import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
     videoGameName: String,
     platform: String,
     developers: String,
     releaseDate: Number,
     productPriceInUSD: Number,

});

const Product = mongoose.model('products', ProductSchema);
export default Product;
