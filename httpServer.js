const http = require('http'); //calling the http module, saving it to http variable

http.createServer(function(req,res){  //creating a server for http with request and response
  res.writeHead(200, {'Content-Type':'text/html'}) //type of response
  res.write("Welcome back :) "); //response
  res.end(); //end of response
}).listen(8080, function(req,res){
  console.log("Running...")
}) //port to listen to
