//Import the "hello" moudule. Make sure it is placed in the same folder to avoid any issues.
var http = require("http");
var hello = require("./hello");

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(hello.sayHelloInEnglish() + "<br>");
    res.write(hello.sayHelloInFrench() + "<br>");
    res.end();
}).listen(8888);

console.log("Running server");




