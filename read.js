
var fs = require("fs");
var data = '';

// Create a readable stream
var rs = fs.createReadStream('hello.js');

// Set the encoding to be utf8
rs.setEncoding("UTF8");

// Handle stream events -> data, end, and error
rs.on('data', function(chunk){
  data += chunk;
})

rs.on('end', function(){
  console.log(data);
})

rs.on('error', function(err){
  console.log(err.stack);
})

console.log("Program ended");
