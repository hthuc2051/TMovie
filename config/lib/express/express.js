const   bodyParser = require('body-parser'),
        morgan 	   = require('morgan');

module.exports = function (app) {

    //@ parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false })) ;

	//@ parse application/json
    app.use(bodyParser.json());
    app.use(morgan('dev'));
}