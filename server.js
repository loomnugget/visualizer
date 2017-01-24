'use strict';

const express = require('express');
const debug = require('debug')('visualizer:server');
const fs = require('fs');

// Module Constants
const PORT = process.env.PORT || 3000;
const app = express();

const server = module.exports = app.listen(PORT, function() {
  debug('server started');
  console.log('server listening', PORT);
});

server.isRunning = true;
