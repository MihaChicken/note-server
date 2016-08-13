
# Notes server #
## Simple REST api server for serving notes ##
### Stack: ###
 - Node.js
 - Express
 - sequelize
 - postgres (other DB is suitable too)

### Installation: ###

 - npm install
 - npm install *pg pg-hstore || mysql || sqlite3 || tedious* (based on db, see [sequelize config](http://docs.sequelizejs.com/en/v3/docs/getting-started/#installation))
 - npm run init:db
 - pass DB configuration into config.js file in config folder
 - npm run migrate:db
 - node index.js