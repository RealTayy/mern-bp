/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');
// Load enviroment variables from .env into process.env
require('dotenv').config()

/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// Initialize express under app variable
const app = express();
const PORT = process.env.PORT || 3001;

/* MONGODB ORM */
//  MongoDB object modeling tool
const mongoose = require('mongoose');

/* PROMISE LIBRARY */
// Bluebird is a fully featured promise library with focus on features and performance
const Promise = require('bluebird');
// Replace mongoose's promise library 
mongoose.Promise = Promise;

/* BODY PARSERS */
// node.js body parsing middleware avaiable under req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

/* LOGGERS */
/* morgan set to 'dev':
	RED         Server Error Codes
	YELLOW      Client Error Codes
	CYAN        Redirection Codes
	UNCOLORED   Other Codes         */
const logger = require('morgan');
app.use(logger('dev'));

/*******************|
|* SET UP DATABASE *| 
|*******************/
// Connect to db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-bp-DB";
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

// Logs error if mongoDB/mongoose runs into an error
db.on("error", (error) => {
	console.log(`DB Error: ${error}`);
});

// Logs success if sucessfully connected to db
db.once("open", () => {
	console.log("DB connection successful!");
});

/*****************|
|* SET UP ROUTES *| 
|*****************/
// Setup app to serve static files from React App depending on dev/prod
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, './client', 'build')));
}
// imports in ./routes/index.js (contains API and VIEW routes);
const routes = require("./routes");
// Sets express to use routes
app.use(routes);

/*********************************|
|* LISTEN FOR CONNECTION ON PORT *| 
|*********************************/
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
