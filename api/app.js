// Import express: Importing the Express framework to create a server and handle HTTP requests.
const express = require('express');

// Creating an instance of the Express application.
const app = express();

// Importing the Mongoose library to connect to and interact with MongoDB.
const mongoose = require('mongoose');

// Enabling Cross-Origin Resource Sharing (CORS) to allow sharing of resources between different servers.
const cors = require('cors');
app.use(cors());

// When the server receives an HTTP request with a JSON body, it will automatically parse and convert the JSON data into a JavaScript object
app.use(express.json());

//html+js in node: Setting the view engine to EJS, which allows rendering HTML templates with embedded JavaScript.
app.set('view engine', 'ejs');

// Enables the server to handle requests that contain URL-encoded parameters
app.use(express.urlencoded({ extended: false }));

// Requiring and importing the connection schema for user details.
require('./routes/Scehmas/connection/userDetails');

// Requiring and importing the learned details schema.
require('./routes/Scehmas/learnedDetails/learnedDetails');

// Requiring and importing various schemas for adding components.
require('./routes/Scehmas/addComponents/case/case');
require('./routes/Scehmas/addComponents/cpu/cpu');
require('./routes/Scehmas/addComponents/cpuCooler/cpuCoolerFan/cpuCoolerFan');
require('./routes/Scehmas/addComponents/cpuCooler/cpuCoolerLiquid/cpuCoolerLiquid');
require('./routes/Scehmas/addComponents/fans/fans');
require('./routes/Scehmas/addComponents/gpu/gpu');
require('./routes/Scehmas/addComponents/motherboard/motherboard');
require('./routes/Scehmas/addComponents/psu/psu');
require('./routes/Scehmas/addComponents/ram/ram');
require('./routes/Scehmas/addComponents/ssd/ssdM2/ssdM2');
require('./routes/Scehmas/addComponents/ssd/ssdSata/ssdSata');

// Requiring and importing various schemas for adding assemblies.
require('./routes/Scehmas/addAssemblies/addAssembliesScehmas');

// Requiring and importing various schemas for adding questionAnswer
require('./routes/Scehmas/questionAnswer/questionAnswer');

const mongoUrl =
  'mongodb+srv://yochaicl:yochaicl@cluster0.endfyfo.mongodb.net/pcBuilder';

// Connecting to the MongoDB database using the provided URL.
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch(e => console.log(e));

// Requiring and activating the routes related to user connection (register, login, etc.).
const register = require('./routes/connection/register');
const login = require('./routes/connection/login');
const userData = require('./routes/connection/userData');
const forgotPassword = require('./routes/connection/forgot-password');
const resetPassword = require('./routes/connection/reset-password');

// Using the '/register' route to handle registration requests.
app.use('/register', register);
// Using the '/login-user' route to handle login requests.
app.use('/login-user', login);
// Using the '/userData' route to handle requests for user data.
app.use('/userData', userData);
// Using the '/forgot-password' route to handle requests for password reset.reset the password
app.use('/forgot-password', forgotPassword);
// Using the '/reset-password' route to handle requests for resetting the password.
app.use('/reset-password', resetPassword);

// Requiring and activating the routes for inserting components.
const insert = require('./routes/addGetComponents/addComponents/insert');

// Requiring and activating the routes for getting components.
const getData = require('./routes/addGetComponents/getComponents/getData');

// Using the '/insert' route to handle requests for inserting components as an admin.
app.use('/insert', insert);

// Using the '/getData' route to handle requests for retrieving components as an admin.
app.use('/getData', getData);

const compLearned = require('./routes/compLearned/compLearned');

app.use('/comp-learned', compLearned);

// Requiring and activating the routes for inserting assemblies.
const addAssemblies = require('./routes/addGetAssembly/addAssemblies');

// Requiring and activating the routes for getting assemblies.
const getAssemblies = require('./routes/addGetAssembly/getAssemblies');

// Using the '/insert' route to handle requests for inserting components as an admin.
app.use('/addAssemblies', addAssemblies);

// Using the '/getData' route to handle requests for retrieving components as an admin.
app.use('/getAssemblies', getAssemblies);

// Requiring and activating the routes for getting and inserting question and answer
const questionAnswer = require('./routes/questionAnswer/questionAnswer');

// Using the '/questionAnswer' route to handle requests for retrieving question and answers.
app.use('/questionAnswer', questionAnswer);

// Starting the server on port 5000 and logging a message when the server starts.
app.listen(5000, () => {
  console.log('server started');
});
