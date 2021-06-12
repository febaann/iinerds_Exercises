//Path module
//All about File Location and File path

const path = require('path');


const fileLocation = path.join(__dirname, 'app.js');

//console.log(fileLocation);

const fileName = path.basename(fileLocation);

const fileExt = path.extname(fileName);

//console.log(fileName);

console.log(fileExt);
