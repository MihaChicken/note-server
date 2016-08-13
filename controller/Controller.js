'use strict';

class Controller {

    applyHeaders(res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "origin, content-type, accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header('Content-Type', 'application/json');
    }

    handleRequest(req, res, handler) {
        this.applyHeaders(res);
        return handler(req, res).then(
            data => res.end(JSON.stringify(data)),
            error => {
                console.error('error', error, error.stack);
                res.end(JSON.stringify(error));
            });
    }
}

module.exports = Controller;