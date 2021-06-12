// MySQl with Node.js
// Bring in express and mysql
const express = require('express');
const mysql = require('mysql');
const app = express();

var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'password',
    database    : 'newdb',
    port        : '3000'
})

connection.connect((err) => {
    if(err){
        throw err;
    }   else {
        console.log('Connected...')
    }
})


// Create table
/*
connection.query('CREATE TABLE tableone(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)', (err, rows) => {
    if(err) {
        throw err
    }   else {
        console.log('DATA SENT...')
        console.log(rows)
    }
})  
*/

/*

// Inserting multiple values
var records = [
    [1, 'feba'],
    [2, 'feby'],
    [3, 'alen']
];
var sql = "INSERT INTO tableone(id, name) VALUES ?";
 
var query = connection.query(sql, [records], (err, rows) => {
    if(err) {
        throw err
    }   else {
        console.log('DATA SENT ...')
        console.log(rows)
    }
}); 
*/

// Insert Values

/*
connection.query("INSERT INTO tableone(id, name) VALUES?" , (err, rows) => {
    if(err) {
        throw err
    }   else {
        console.log('DATA SENT ...')
        console.log(rows)
    }
})
**/


// DELETE statment
let sql = `DELETE FROM tableone WHERE id = ?`;

// delete a row with id 1
connection.query(sql, 1, (error, results, fields) => {
  if (error)
    return console.error(error.message);

  console.log('Deleted Row(s):', results.affectedRows);
});

const port = process.env.PORT || 4000;

app.listen(port);
console.log('app is listening on port ' + port)