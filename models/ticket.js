import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const ticketSchema = new Schema({

        
      
        fanId: { type: Schema.Types.ObjectId, ref: 'fan' },
        matchId: { type: Schema.Types.ObjectId, ref: 'match' },
       
        
    },
    {
        timestamp:true
    }
);

export default mongoose.model('ticket',ticketSchema);