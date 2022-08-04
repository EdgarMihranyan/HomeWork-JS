import mongoose from 'mongoose';

const { Schema } = mongoose;

const PcSchema = new Schema({
     headphones: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ps/Headphones',
          require: true,
     },
     keyboard: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ps/Keyboard',
     },
     monitor: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ps/Monitor',
          require: true,
     },
     mouse: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ps/Mouse',
          require: true,
     },
     videoCard: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Ps/Video Card',
          require: true,
     },
});

const PC = mongoose.model('PC', PcSchema);
export default PC;
