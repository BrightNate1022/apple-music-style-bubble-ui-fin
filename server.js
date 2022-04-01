var mysql = require('mysql');
var express = require('express');
const path = require('path')
var fs = require('fs')
// var index = require("index.html")
app = express();
app.get('/',(request,response)=>{
    ;
    response.sendFile(path.join(__dirname, '/index.html'));
    app.use(express.static((__dirname)));
  });
  
  //Binding the server to a port(3000)
  app.listen(5000,()=>console.log("express server started at port 3000"));

var con = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "b4b4d8ef46396f",
  password: "7aea24f7",
  database: "heroku_bd64a8a37828abf"
});


var nameb = {};
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
con.query("SELECT Name FROM test", function (err, result) {
      if (err) throw err;
   
    nameb = result;
    var json = JSON.stringify(nameb);
      module.exports = result; 
      fs.writeFile('myjsonfile.json', json, 'utf8', function (err, data){
          if(err) console.log("error",err);
      });
     
  });
  con.query("SELECT Image FROM test", function (err, result) {
    if (err) throw err;
 
  var image = result;
  var json = JSON.stringify(image);
  module.exports = result; 
  fs.writeFile('Img.json', json, 'utf8', function (err, data){
      if(err) console.log("error",err);
  });
  });
});
module.exports = con;
