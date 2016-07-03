
var fs = require("fs");
var zlib = require("zlib")

// Compress the file input.txt to input.txt.gz
fs.createReadStream('data.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('data.txt'));

console.log("File Decompressed");
