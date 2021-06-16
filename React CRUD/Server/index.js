const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddatabase'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/api/insert', (req, res) => {

    const bookName = req.body.bookName
    const bookReview = req.body.bookReview

  const sqlInsert = "INSERT INTO `book_reviews` (`bookName`, `bookReview`) VALUES (?,?);"
  pool.query(sqlInsert, ["bookName", "bookReview"], (err, result) => {
    if(err) console.log(err);
    else console.log(result);
  })  
});

app.listen(3001, () => {
    console.log('Running on port 3001');
});