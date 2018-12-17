
const mongoose = require('mongoose');
const Country = require('../model/country');
const Actor = require('../../actor/model/actor');
const helper_lib = require('../../../config/lib/helper_lib/common');


exports.getCountries = async (req, res, next) => {
  let Common = new helper_lib.common();
  let resObj = {};
  let countries = await Country.find();
  if (Object.keys(countries).length !== 0) {
    resObj = Common.generateResponses(200, 'Founded', 'List of countries :', null, countries);
  } else {
    resObj = Common.generateResponses(200, 'Not found', 'No record ');
  }
  res.status(resObj.statusCode).json(resObj);
}

exports.getCountry = async (req, res, next) => {
  let countryID = req.params.countryID;
  //check ID not a type of ObjectID
  let country = await Actor.findById(countryID);
  let Common = new helper_lib.common();
  let resObj = {};
  if (country) {
    resObj = Common.generateResponses(200, 'Founded', 'Country details :', null, country);
  } else {
    resObj = Common.generateResponses(200, 'Not found', 'No record for id: ' + countryID);
  }
  res.status(resObj.statusCode).json(resObj);
}
exports.updateCountry = async (req, res, next) => {
  res.status(200).json({
    message: 'updateCountry'
  })
}
// exports.deleteCountry = async (req, res, next) => {
//   let resObj = {};
//   let Common = new helper_lib.common();
//   let countryID = req.params.countryID;
//   let country = await Country.findById(countryID);
//   if (country) {
//     await Country.findOneAndDelete({ _id: countryID }, async (err) => {
//       let actors = country.actors;
//       if (err) {
//         resObj = Common.generateResponses(500, 'Failed', `Actor delete failed`, err);
//       } else {
//         resObj = Common.generateResponses(200, 'Successfully', `Actor deleted successfully`);
//         if (actors.length >0) {
//           console.log('Here'+actors.length);
//           for (const actorID of actors) {
//             console.log('actorID'+actorID);
//             let actor = await Actor.findById(actorID);
//             console.log('actor'+actor);
//             actor.country=null;
//             actor.save();
//           }
//         }
//       }
//     })
//   } else {
//     resObj = Common.generateResponses(500, 'Failed', `Actor not found`);
//   }
//   res.status(resObj.statusCode).json(resObj);
// }
exports.addNewCountry = async (req, res, next) => {
  //let Common = new helper_lib.common();
  let data = req.body,
    resObj = {};
  // if (Object.keys(data).length === 0) {
  //   resObj = Common.generateResponses(400, 'failed', 'Data not found to insert');
  //   return res.status(resObj.statusCode).json(resObj);
  // }
  
  let country = await new Country({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });
  country.save((err, saved) => {
    if (err) {
      res.status(500).json(err);
    } else {
      let result = {
        _id: saved._id,
        name: saved.name
      }
      res.status(200).json({
        result: result
      })
    }
  });

}

exports.deleteCountry = (req, res)=> {
  let resObj = {};
  let Common = new helper_lib.common();

  Country.findOne({ _id: req.params.countryID}, function(err, country) {
      if (err)
      resObj = Common.generateResponses(500, 'Failed', `Actor delete failed`, err);
      else if (country == null)
      resObj = Common.generateResponses(404, 'Failed', `Country not found`, err);
      else {
        country.remove();
        resObj = Common.generateResponses(200, 'Successfully', `Actor deleted successfully`);
      }
      res.status(resObj.statusCode).json(resObj);
  });
}