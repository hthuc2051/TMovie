const mongoose = require('mongoose');

const directorSchema = mongoose.Schema({
    _id=mongoose.Schema.Types.ObjectId,
    fullName: 
    {
        type:String
    },
    movies:
    [{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }]
});
module.exports = mongoose.model('Director',eposideSchema);