'use strict';

// npm modules
const express = require('express');
const debug = require('debug')('visualizer:server');
const fs = require('fs');
//const path = require('path');

// module constants
const PORT = process.env.PORT || 3000;
const app = express();

// Use express middleware to serve music files directly
app.use(express.static(`${__dirname}/app`));

// Route to get music file
app.get('/music', function(req, res){
  // set file path to query
  var fileId = req.query.id;
  var file = `${__dirname}/music/${fileId}`;
  res.set({'Content-Type': 'audio/mpeg'});
  var readStream = fs.createReadStream(file);
  readStream.pipe(res);
});

const server = module.exports = app.listen(PORT, function() {
  debug('server started');
  console.log('server listening', PORT);
});

server.isRunning = true;
