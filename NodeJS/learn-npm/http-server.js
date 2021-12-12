const http = require('http');

http.createServer(function(req,res){
    res.end('Hello Yossef');
}).listen(8080);
