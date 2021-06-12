// File System

const fs = require('fs');

          // Filename, message, callback function
fs.writeFile('message.txt', 'Hello there node', (err) => {
    if(err) throw err;

    console.log('File has been written');
});  

console.log('hello');