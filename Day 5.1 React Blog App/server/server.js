
/**
 * Module dependencies.
 */
require('dotenv').config()
const http = require('http');
const logger = require('./app/util/logger');
import app from  './express';
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
var mongoose = require('mongoose');
console.log(process.env.MONGO)
mongoose.connect(process.env.MONGO,  { useNewUrlParser: true } );
// Bootstrap sequelize models
const server = http.createServer(app());

server.listen(3002 || process.env.PORT, () => {
  logger.info('Application started on port ', 3002 || process.env.PORT);
});

export default server;
