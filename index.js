"use strict";

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

const SERVER_PORT_ARGUMENT = '-port';
let port = 8080;

if (process.argv[3]) {
    let portArgument = process.argv[3].split('=');
    if (portArgument[0] === SERVER_PORT_ARGUMENT) {
        port = portArgument[1];
    }
}

process.stdin.resume();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


routes(app);

app.listen(port, () => {
    console.log('server is listening on port: ' + port);
});