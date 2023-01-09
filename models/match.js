import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const matchSchema = new Schema({

        date:{
            type: String,
            required:true
        },
        teamHome:{
            type: String,
            required:true

        },
        teamAway:{
            type: String,
           required:true

        },
        nbPlaces:{
            type: Number,
            required:true
        },
       
      
        tickets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ticket'
        }],
      
       // user: { type: Schema.Types.ObjectId, ref: 'user' },
       
        
    },
    {
        timestamp:true
    }
);

export default mongoose.model('match',matchSchema);