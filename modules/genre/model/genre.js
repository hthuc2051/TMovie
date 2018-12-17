const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String
    }
});
module.exports = mongoose.model('Gnere',eposideSchema);