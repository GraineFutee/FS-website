const { Pool } = require("pg");
const pool = new Pool({
  user: "pierro",
  host: "localhost",
  database: "FriendShopping",
  password: null,
  port: 5432,
});
// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   //   pool.end();
// });

module.exports = {
  query: (text, params) => pool.query(text, params),
};

// const { Pool, Client } = require("pg");
// const pool = new Pool({
//   user: "dbuser",
//   host: "database.server.com",
//   database: "mydb",
//   password: "secretpassword",
//   port: 3211,
// });
// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });
// const client = new Client({
//   user: "dbuser",
//   host: "database.server.com",
//   database: "mydb",
//   password: "secretpassword",
//   port: 3211,
// });
// client.connect();
// client.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   client.end();
// });
