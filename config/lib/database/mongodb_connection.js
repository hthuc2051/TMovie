const mongoose 			= require('mongoose')
	  path				= require("path");

module.exports = function(server, ENV) {
	
	mongoose.Promise = global.Promise ; 
	mongoose.set('debug', ENV.MONGO_DEBUG) ;

    let url = `mongodb://${ENV.HOST}/${ENV.MONGODB}` ;

/*create mongoDB connection*/
mongoose.connect(url, { useNewUrlParser: true });

/*if if connection established*/
mongoose.connection.on('connected', (err, status) => {
    console.log('Connect mongodb success') ;
});

/*if unable to connect to DB*/
mongoose.connection.on('error', (err) => {
    console.log('Connect mongodb failed') ;
});	

/*if connection has been break due to any reason*/
mongoose.connection.on('disconnected', (err) => {
    console.log('Mongodb disconnected') ;
});	
        
}