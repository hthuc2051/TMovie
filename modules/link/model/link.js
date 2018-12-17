const mongoose = require('mongoose');

const linkShcema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    link:
    [{
        type:String
    }],
    eposide:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Eposide'
    }
});
module.exports = mongoose.model('Link',linkShcema);