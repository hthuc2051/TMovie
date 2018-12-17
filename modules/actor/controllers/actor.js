
const mongoose = require('mongoose');
const Actor = require('../model/actor');
const Country = require('../../country/model/country');
const actorMiddleware = require('../../../middleware/actor');
const helper_lib = require('../../../config/lib/helper_lib/common');

exports.getActors = async (req, res, next) => {
  let Common = new helper_lib.common();
  let resObj = {};
  let actors = await Actor.find();
  if (Object.keys(actors).length !== 0) {
    resObj = Common.generateResponses(200, 'Founded', 'List of actors :', null, actors);
  } else {
    resObj = Common.generateResponses(200, 'Not found', 'No record ');
  }
  res.status(resObj.statusCode).json(resObj);
}

exports.getActor = async (req, res, next) => {
  let actorID = req.params.actorID;
  //check ID not a type of ObjectID
  let actor = await Actor.findById(actorID);
  let Common = new helper_lib.common();
  let resObj = {};
  if (actor) {
    resObj = Common.generateResponses(200, 'Founded', 'Actor details :', null, actor);
  } else {
    resObj = Common.generateResponses(200, 'Not found', 'No record for id: ' + actorID);
  }
  res.status(resObj.statusCode).json(resObj);
}
exports.updateActor = async (req, res, next) => {
  let Common = new helper_lib.common();
  let data = req.body,
    conditions = { '_id': req.params.actorID },
    resObj = {};
  if (Object.keys(data).length === 0) {
    resObj = Common.generateResponses(400, 'Failed', 'data not found to update');
    return res.status(resObj.statusCode).json(resObj);
  }
  console.log('country'+data.country);
  if(data.country){
    Country.findOneAndUpdate(
      { actors: req.params.actorID },
      { $pull: { actors: req.params.actorID }},
      { multi: true },
      function (error) {
          console.log('Error: ' + error);
      });
      Country.findOneAndUpdate(
        { _id:data.country },
        { $push: { actors: req.params.actorID }},
        { multi: true },
        function (error) {
            console.log('Error: ' + error);
        });
  }
  Actor.updateOne(conditions, data, (err, update) => {
    if (err) {
      resObj = Common.generateResponses(500, 'Failed', `Actor update failed for ${data._id}`, err);
    } else if (update.nModified == 1) {
      console.log(actor);
      resObj = Common.generateResponses(200, 'Success', 'Actor updated successfully', null, update);
    } else if (update.nModified == 0 && update.n == 1) {
      resObj = Common.generateResponses(400, 'Failed', 'Actor can not update due to some technical reason');
    } else {
      resObj = Common.generateResponses(404, 'Failed', `${req.params.actorID} does not exist`, err);
    }
    res.status(resObj.statusCode).json(resObj);
  });
}


// exports.deleteActor = async (req, res, next) => {
//   let resObj = {};
//   let Common = new helper_lib.common();
//   let actorID = req.params.actorID;
//   let actor = await Actor.findById(actorID);
//   if (actor) {
//     let country = await Country.findById(actor.country);
//     await Actor.findOneAndDelete({ _id: actorID }, (err) => {
//       if (err) {
//         resObj = Common.generateResponses(500, 'Failed', `Actor delete failed`, err);
//       } else {
//         resObj = Common.generateResponses(200, 'Successfully', `Actor deleted successfully`);
//         if (country) {
//           country.actors.pull(actor);
//           country.save();
//         }
//       }
//     })
//   } else {
//     resObj = Common.generateResponses(500, 'Failed', `Actor not found`);
//   }
//   res.status(resObj.statusCode).json(resObj);
// }

//delete2
exports.deleteActor = async (req, res) => {
  let Common = new helper_lib.common();
  let resObj = {};
  Actor.findOne({ _id: req.params.actorID}, function (err, actor) {
    if (err) {
      resObj = Common.generateResponses(500, 'Failed', `Actor delete failed`, err);
    } else if (actor == null)
    resObj = Common.generateResponses(404, 'Failed', `This actor doesn't exist`);
    else {
      actor.remove();
      resObj = Common.generateResponses(200, 'Successfully', `Actor deleted successfully`);
    }
    res.status(resObj.statusCode).json(resObj);
  });
};
exports.addNewActor = async (req, res, next) => {
  let Common = new helper_lib.common();
  let data = req.body,
    resObj = {};
  if (Object.keys(data).length === 0) {
    resObj = Common.generateResponses(400, 'failed', 'Data not found to insert');
    return res.status(resObj.statusCode).json(resObj);
  }
  let resolveObj = await actorMiddleware.resolve(req.body.country, req.body.movies);
  let actor = new Actor({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    country: resolveObj.country,
    dateOfBirth: req.body.dateOfBirth
  });
  actor.save((err, saved) => {
    let country = resolveObj.country;
    let movies = resolveObj.movies;
    if (err) {
      resObj = Common.generateResponses(500, 'Failed', `Actor saved failed`, err);
    } else {
      if (country) {
        country.actors.push(actor._id);
        country.save();
      }
      if (movies.length > 0) {
        for (const movie of movies) {
          movie.actors.push(actor._id);
          movie.save();
        }
      }
      resObj = Common.generateResponses(200, 'Success', 'Actor saved successfully', null, saved, resolveObj.msg);
    }
    res.status(resObj.statusCode).json(resObj);
  });
};
