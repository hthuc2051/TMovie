const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id = mongoose.Schema.Types.ObjectId,
    movie:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    details:
    {
        type:String
    }
});
module.exports = mongoose.model('Comment',commentSchema);