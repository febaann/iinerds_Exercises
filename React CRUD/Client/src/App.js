import React, { useState } from "react";
import './App.css';
import Axios from 'axios'

function App() {

  const [bookName, setBookName] = useState('');
  const [bookReview, setBookReview] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {  
      bookName: bookName, 
      bookReview: bookReview
    }).then(() => {
      alert('successful insert');
    });
  };

  return (
     <div className="App">
        <h1>CRUD APPLICATION</h1>

        <div className = "form">
          <label>Book Name:</label>
          <input type  = "text" name = "bookName" onChange = {(e) => {
           setBookName(e.target.value)
          }} />
          <label>Review:</label>
          <input type  = "text" name = "bookReview" onChange = {(e) => {
           setBookReview(e.target.value)
          }} />
          <button onClick = {submitReview}>Submit</button>
        </div>
      </div>
  );
}

export default App;
