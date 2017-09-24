var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var myRoutes = express.Router();

myRoutes.use(function(req, res, next) {
    // check token here to auth request.
    // if valid then next();
    // otherwise res.json;
    console.log('pre request data');
    next();
});

var urlEncodedParser = app.use(bodyParser.urlencoded({ extended: true }));
// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
var rawParser = app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

var jsonParser = app.use(bodyParser.json());

app.use('/api', myRoutes);

myRoutes.use('/calculate', rawParser, require('./controller/calculateController'));

myRoutes.use(function(req, res, next) {
    console.log('post request data');
    next();
});

app.listen(5000, function() {
    console.log('server is created');
});