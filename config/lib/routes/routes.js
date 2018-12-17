const path			     = require('path'),
	fs 			         = require('fs'),
    ENV                  = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
	location		     = path.resolve('./modules');


module.exports = (app) => {

    //@ require all controllers here
    // fs.readdirSync(location)
    //     .filter((dir) => {
    //         return fs.statSync(`${location}/${dir}`).isDirectory();
    //     }).forEach((dir, index) => {
    //         console.log('dir '+dir);
    //         let fileObj = require(path.resolve(`./modules/${dir}/routes/routes`));            
    //         app.use(fileObj.base,	fileObj.router);
    //         console.log('path '+path.resolve(`./modules/${dir}/routes/routes`));
    //         console.log(fileObj.base +' -- '+ fileObj.router)
    // });
    let fileObj = require('../../../modules/actor/routes/routes');            
    app.use(fileObj.base,	fileObj.router);
    let fileObj1 = require('../../../modules/country/routes/routes');            
    app.use(fileObj1.base,	fileObj1.router);
}