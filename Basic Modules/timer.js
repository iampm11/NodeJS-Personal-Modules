var http = require("http");

http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("Before Timer<br>");
    setInterval(function(){
       response.write("During timer (3 sec)<br>");
    },3000);
}).listen(8888);

console.log("Server is running...");


