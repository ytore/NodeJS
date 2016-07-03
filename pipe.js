
var fs = require("fs");
var data = '';

// Create a readable stream
var rs = fs.createReadStream('hello.js');

// Create a writable stream
var ws = fs.createWriteStream('data.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
rs.pipe(ws);

console.log("Program ended");
