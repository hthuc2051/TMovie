const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:
    {
         type: String
    },
    description:
    {
         type: String
    },
    totalEposide:
    {
         type: Number
    },
    dateRealease:
    {
        type: Date
    },
    imdb:
    {
        type:Number
    },
    genres :
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Genre'
    }],
    images :
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Image'
    }],
    category :
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    countries:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Country'
    }],
    actors:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Actor'
    }],
    comments:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comments'
    }],
    eposides:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Eposide'
    }],
    directors:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Director'
    }]
});
module.exports =mongoose.model('Movie',movieSchema);