const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    poster:{
        type:String
    },
    imageRelate:
    [{
        type:String
    }],
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }
});
module.exports = mongoose.model('Image',imageSchema);