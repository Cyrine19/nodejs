var fs = require("fs");
// fs is the file system module we will see it later
var data = fs.readFileSync('welcome.txt');

console.log(data.toString());
console.log("Program Ended");