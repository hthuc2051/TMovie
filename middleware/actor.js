
const Country = require('../modules/country/model/country');

exports.resolve = async (countryID,moviesID) => {
    let resoleObj = {};
    let msg = '';
    resoleObj.country =null;
    resoleObj.movies=[];
    console.log(countryID == null);
    if (countryID != null) {
        console.log('Country id founded');
        let country = await Country.findById(countryID);
        if (country) {
            resoleObj.country = country;
        } else{
            console.log('Country not found for id');
            msg+= 'Country not found for id '+countryID+'  |  ';
        }
    }
    if(moviesID !=null){
        let movieNotFound =[];
        for(const data of moviesID){
            let movie = await Country.findById(data);
            if (movie) {
                resoleObj.movies.push(movie);
            } else{
                movieNotFound.push(data);
            }
        }
        if(movieNotFound){
            msg+= 'Movies not found for id : '+movieNotFound;
        } 
    }
    resoleObj.msg = msg;
    return resoleObj;
}

exports.resolveUpdate = async (data) => {
    let resoleObj = {};
    let msg = '';
    let country = data.country;
    resoleObj.country =null;
    resoleObj.movies=[];
    console.log(countryID == null);
    if (countryID != null) {
        console.log('Country id founded');
        let country = await Country.findById(countryID);
        if (country) {
            resoleObj.country = country;
        } else{
            console.log('Country not found for id');
            msg+= 'Country not found for id '+countryID+'  |  ';
        }
    }
    if(movies.length >0){
        let movieNotFound =[];
        for(const data of moviesID){
            let movie = await Country.findById(data);
            if (movie) {
                resoleObj.movies.push(movie);
            } else{
                movieNotFound.push(data);
            }
        }
        if(movieNotFound){
            msg+= 'Movies not found for id : '+movieNotFound;
        } 
    }
    resoleObj.msg = msg;
    return resoleObj;
}

