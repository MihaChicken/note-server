"use strict";

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

let port = process.env.SERVER_PORT || 8081;

process.stdin.resume();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


routes(app);

app.listen(port, () => console.log('Server is listening on port: ' + port));