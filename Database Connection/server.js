const mysql = require("mysql");
const express = require("express");
const bodyParser =  require("body-parser");

var app = express();
app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host:    "localhost",
    user:   "root",
    password:   "password",
    database:   "newdb",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err) {
        console.log("Connected..");
    }
    else {
        console.log("Connection failed..");
    }

})

app.listen(5000);
