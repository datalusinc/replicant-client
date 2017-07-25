// Other Libraries
const path = require('path');
const koa = require('koa');


// const mongoose = require('mongoose');
const config = require('./config/environment');

// Connect to database
// mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
// if(config.seedDB) { console.log('seeding...'); require('./config/seed'); }

// The app
var app = new koa();

require('./config/server')(app);
require('./routes')(app);

app.listen(config.port);