        require('dotenv').config();
const   express = require('express'),
        app = express(),
        server = require('http').createServer(app),
        path = require('path'),
        dotenv = require('dotenv'),
        ENV = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
        require(path.resolve('./config/lib/server'))(app, ENV);


    server.listen(ENV.PORT, () => {
        console.log(`Server is running ${ENV.PORT}`)
    });