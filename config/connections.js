/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */
 
var urlParse = require('url-parse');
//var trim = require('trim');
//process.env.DATABASE_URL = 'postgres://bsyunlcnpfalcy:U3nn-sfRxe7os2Dif1m5OGfg74@ec2-54-235-199-36.compute-1.amazonaws.com:5432/d6ne8chcpgmboj';

var db = urlParse(process.env.DATABASE_URL);
console.log('DEBUG0:db='+JSON.stringify(db));
var host = db['hostname'] || '';
console.log('DEBUG1:'+host);
var user = db['username'] || '';
console.log('DEBUG2:'+user);
var password = db['password'] || '';
console.log('DEBUG3:'+password);
//var database = trim(db['path'], '/');
//var database = db['pathname'].trim('¥/');
var database = db['pathname'].replace('/','')  || '';
console.log('DEBUG4:'+database);


module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  someMysqlServer: {
    adapter: 'sails-mysql',
    host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'YOUR_MYSQL_DB'
  },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  someMongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username',
    // password: 'password',
    // database: 'your_mongo_db_name_here'
  },

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  somePostgresqlServer: {
    adapter: 'sails-postgresql',
//    host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
//    user: 'YOUR_POSTGRES_USER',
//    password: 'YOUR_POSTGRES_PASSWORD',
//    database: 'YOUR_POSTGRES_DB'
    host: host || 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: user || 'YOUR_POSTGRES_USER',
    password: password || 'YOUR_POSTGRES_PASSWORD',
    database: database || 'YOUR_POSTGRES_DB'
  }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
