const mongoose = require('mongoose');
const actorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:
    {
        type: String, require: true
    },
    country:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country'
    },
    dateOfBirth:
    {
        type: Date
    },
    movies:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }],

});

actorSchema.post('remove', function (doc) {
    var Country = require('../../country/model/country');
    Country.findOneAndUpdate(
        { actors: doc._id },
        { $pull: { actors: doc._id } },
        { multi: true },
        function (error) {
            console.log('Error: ' + error);
        });
});

actorSchema.post('updateOne', function(error,update, data) {
    console.log('Here');
    console.log(data);
  });
  
module.exports = mongoose.model('Actor', actorSchema);