
# Notes server #
## Simple REST api server for serving notes ##
### Stack: ###
 - Node.js
 - Express
 - Sequelize

### Installation: ###
 - npm install
 - npm install *pg pg-hstore || mysql || sqlite3 || tedious* (based on db, see [sequelize config](http://docs.sequelizejs.com/en/v3/docs/getting-started/#installation))
 - npm run init:db
 - pass DB configuration into generated config/config.js file
 - npm run migrate:db
 - node index.js

 By default server will listen port 8081.
 To change port number just pass *SERVER_PORT* environment variable.