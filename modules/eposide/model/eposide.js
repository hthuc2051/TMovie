const mongoose = require('mongoose');

const eposideSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    eposideNumber: 
    {
        type:Number
    },
    name:
    {
       type:String
    },
    dateRealease : 
    {
        type:Date
    },
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    },
});
module.exports = mongoose.model('Eposide',eposideSchema);