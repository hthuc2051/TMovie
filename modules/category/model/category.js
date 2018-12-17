const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id = mongoose.Schema.Types.ObjectId,
    name:
    {
        type:String
    },
    movies :
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'
    }]
});
module.exports = mongoose.model('Category',categorySchema);