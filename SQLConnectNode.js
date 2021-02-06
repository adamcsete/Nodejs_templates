const mysql = require('mysql');

const host = "192.168.0.180";
const port = 3306;
const user = "admin";
const password = "1234";

const con = mysql.createConnection({
  host: host,
  port : port,
  user: user,
  password: password
});

con.connect((err) => {
    if (err) throw err;
    console.log(`Successfully connected to host ${host} with user ${user} and password ${password}`);
});
