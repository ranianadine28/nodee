import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const FanSchema = new Schema({

    fullname: {
        type: String,
        required:true
    },
   
    phone: {
        type: Number,
        required:true

    },

    team: {
        type: String,
        required:true

    },
    image: {
        type:String,
        required:true

    },
  
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ticket'
    }],


   
},
    {
        timestamp: true
    }
);

export default mongoose.model('fan', FanSchema);