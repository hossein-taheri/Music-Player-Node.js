const express = require('express');
const app = express();

//request config
require('./bootstrap/request')(app);

//.env config
require('./bootstrap/dotenv');

//database config
require('./bootstrap/database');

//global config
require('./bootstrap/global');

//routing config
require('./bootstrap/router')(app);

//404 config
require('./bootstrap/not_found')(app);

//Error handler
require('./bootstrap/error_handler')(app);

//listening config
require('./bootstrap/listening')(app);