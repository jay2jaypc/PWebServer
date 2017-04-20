//GETTING DEPENDENCIES

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


//GET THE API ROUTES

const api = require('./server/routes/api');
const app = express();

//PARSE FOR POST DATA
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//POINT STATIC PATH TO DIST
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

app.set('port', port);


//CREATE HTTP SERVER
const server = http.createServer(app);

server.listen(port, function(){
  console.log('API running on localhost: '+port);
});

var cfenv = require('cfenv');

// create a new express server

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host

