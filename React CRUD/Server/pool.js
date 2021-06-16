// const util = require('util');
// const mysql = require('mysql');
// const dotenv = require('dotenv');
// dotenv.config({path:'.env' })

// /**Database connection */
// const pool = mysql.createPool({
// connectionLimit:10,
// host: process.env.DATABASE_HOST,
// user: process.env.DATABASE_USER,
// password: process.env.DATABASE_PASSWORD,
// database: process.env.DATABASE
// });

// pool.getConnection((err, connection) => {
// if(err)
// console.error("Something went wrong connecting to the database ...");

// if(connection)
// connection.release();
// return;
// });

// pool.query = util.promisify(pool.query);

// module.exports = pool;