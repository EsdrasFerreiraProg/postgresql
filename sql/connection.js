// db.js
const postgres = require('postgres');

const sql = postgres('postgres://username:password@host:port/database', {
  host                 : '',            // Postgres ip address[s] or domain name[s]
  port                 : 1000,          // Postgres server port[s]
  database             : '',            // Name of database to connect to
  username             : '',            // Username of database user
  password             : '',            // Password of database user

})

module.exports = sql;