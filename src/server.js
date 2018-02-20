let express = require('express');
let bodyParser = require("body-parser");                                       // express server
let path = require('path');                                                  // to make paths absolute
let app = express();                                                         // initializing app.

app.use(bodyParser.json());

let routes = require('./serverRoute/serverRoute');



app.use('/static', express.static(path.join(__dirname, '../static')));               // setting paths for static
// setting paths for favicon



app.use('/', routes);


app.listen(3000);     // listening to port 3000
