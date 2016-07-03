
var fs = require('fs');

fs.readFile('hello.js', function(err, data){
  if(err) return console.log(err);
  console.log(data.toString());
});

console.log("program ended!");
