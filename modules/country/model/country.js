const mongoose = require('mongoose');
var Actor2 = require('../../actor/model/actor');
const countrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:
    {
        type: String
    },
    movies:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }],
    actors:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Actor'
        }]
});
countrySchema.post('remove', function (doc) {
    const Actor = require('../../actor/model/actor'); // méo biết s khai báo ngoài k dc @@
    Actor.updateMany({ country: doc._id }, { country:null }, { multi: true }, function (err, raw) {
        if (err)console.log(err);
      });
    // Actor.deleteOne({ country: doc._id }).exec();
})
module.exports = mongoose.model('Country', countrySchema);