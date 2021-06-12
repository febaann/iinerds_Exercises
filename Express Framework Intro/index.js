// Using Node.js in Express framework (30/April/2021) 
// URL mapping

// getting express in our code
const express = require('express'); //returns a function

// Initialize express
const app = express();

app.get('/', function(req, res) {

    // Sending a response on the browser
    res.send('Hello World');
})

// Sending a response on the user page
app.get('/user', function (req, res) {

    const id = req.query.id
    res.send('Welcome Back User!!! ' + id);
})

// Accepting a dynamic url
app.get('/user/:id', function (req, res) {

    const id = req.params.id
    res.send('Hey Feba ' + id);
})

// Start the server
app.listen(9000, function (req, res) {
   console.log('Running..'); 
});

