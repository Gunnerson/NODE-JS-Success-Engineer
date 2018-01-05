//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

//To include the HTTP module, use the require() method:
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //write a response to the client
  res.write('Hello World, I am here and ready to learn NODE!!!!!');
  //end the response
  res.end();
  //the server object listens on port 8080
}).listen(8080);

//TO TEST, IN TERMINAL, INSIDE CORRECT DIRECTORY
  //TYPE: node http.js
