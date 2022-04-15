
var http = require('http');
const url=require('url');

http.createServer(function (req, res) {
    console.log(req.url);
 if(req.url=='/greet?name'){
     let params=url.parse(req.url,true).query;

     res.writeHead(200,{ 'Content-Type': 'text/html' });
     res.write("<h1>"+params.name+"Hello from Node Server</h1>");
     res.end();
 }else{
     res.end("No Data");
 }
}).listen(8080);
