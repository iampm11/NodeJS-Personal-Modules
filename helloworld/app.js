var http = require("http");

http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("The date and time are currently<br>");
    response.write(request.url + "<br>");
    response.end("Hello World Again");
}).listen(8888);

console.log("Server is running...");