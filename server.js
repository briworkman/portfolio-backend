const express = require('express');
var cors = require('cors');

const ProjectRouter = require('./projects/project-router');

const server = express();

server.use(express.json());
server.use('/api/projects', cors(), ProjectRouter);

module.exports = server;
