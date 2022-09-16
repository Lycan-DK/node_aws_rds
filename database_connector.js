var postgresdb = require('pg');
const env = require("./env.json")
const pool = new postgresdb.Client({
  "host"     : env.RDS_HOSTNAME,
  "user"     : env.RDS_USERNAME,
  "password" : env.RDS_PASSWORD,
  "port"     : env.RDS_PORT,
});

pool.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

// pool.end();
exports.db_connection = pool