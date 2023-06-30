// Yochai Chen Levi

// Import express: Importing the Express framework to create a server and handle HTTP requests.
const express = require('express');
const app = express();
// Importing the Mongoose library to connect to and interact with MongoDB.
const mongoose = require('mongoose');

const mongoUrl =
  'mongodb://yochaicl:yochaicl@ac-dafclzr-shard-00-00.endfyfo.mongodb.net:27017,ac-dafclzr-shard-00-01.endfyfo.mongodb.net:27017,ac-dafclzr-shard-00-02.endfyfo.mongodb.net:27017/pcBuilder?ssl=true&replicaSet=atlas-tfq3m8-shard-0&authSource=admin&retryWrites=true&w=majority';

// Connecting to the MongoDB database using the provided URL.
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch(e => console.log(e));

// Enabling Cross-Origin Resource Sharing (CORS) to allow sharing of resources between Node and React.
const cors = require('cors');
app.use(cors());

// When the server receives an HTTP request with a JSON body, it will automatically parse and convert the JSON data into a JavaScript object
app.use(express.json());

//html+js in node: Setting the view engine to EJS, which allows rendering HTML templates with embedded JavaScript.
app.set('view engine', 'ejs');

// Enables the server to handle requests that contain URL-encoded parameters
// false - the behavior is limited to simple key-value pairs.
app.use(express.urlencoded({ extended: false }));

// Requiring and importing the schemas:
require('./routes/Scehmas/connection/userDetails');
require('./routes/Scehmas/learnedDetails/learnedDetails');
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
require('./routes/Scehmas/addAssemblies/addAssembliesScehmas');
require('./routes/Scehmas/questionAnswer/questionAnswer');

// Requiring and activating the routes related to user connection (register, login, etc.).
const signUp = require('./routes/connection/signUp');
const login = require('./routes/connection/login');
const userData = require('./routes/connection/userData');
const forgotPassword = require('./routes/connection/forgotPassword');
const resetPassword = require('./routes/connection/resetPassword');
app.use('/register', signUp);
app.use('/login-user', login);
app.use('/userData', userData);
app.use('/forgot-password', forgotPassword);
app.use('/reset-password', resetPassword);

// Requiring and activating the routes for adding & getting component.
const addComponent = require('./routes/addGetComponents/addComponent/addComponent');
const getComponent = require('./routes/addGetComponents/getComponent/getComponent');
app.use('/addComponent', addComponent);
app.use('/getComponent', getComponent);

// Requiring and activating the routes for learning the components.
const compLearned = require('./routes/compLearned/compLearned');
app.use('/comp-learned', compLearned);

// Requiring and activating the routes for assemblies data.
const addAssemblies = require('./routes/addGetAssembly/addAssemlies/addAssemblies');
const getAssemblies = require('./routes/addGetAssembly/getAssemblies/getAssemblies');
const showComponentsData = require('./routes/addGetAssembly/getComponentsModels/getComponentsModels');
app.use('/addAssemblies', addAssemblies);
app.use('/getAssemblies', getAssemblies);
app.use('/getComponentsModels', showComponentsData);

// Requiring and activating the routes for getting and inserting question and answer
const userQuestionAnswer = require('./routes/questionAnswer/userQuestionAnswer/userQuestionAnswer');
app.use('/userQuestionAnswer', userQuestionAnswer);

// Requiring and activating the routes for delete components and assemblies
const deleteAssemblies = require('./routes/delete/deleteAssemblies/deleteAssemblies');
const deleteComponents = require('./routes/delete/deleteComponents/deleteComponents');
app.use('/deleteAssemblies', deleteAssemblies);
app.use('/deleteComponents', deleteComponents);

const updateAssembly= require ('./routes/updateAssembly/updateAssembly')
app.use('/updateAssembly', updateAssembly)

// Starting the server on port 5000.
app.listen(5000, () => {
  console.log('server started');
});
