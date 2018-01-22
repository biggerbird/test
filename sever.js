var http = require ('http');
http.createServer(function(request,responce){
  //responce.writeHead('200',{'content-tyle':'text/plain'});
  responce.end("hollo world\n")
}).listen(8888);
console.log('server running at http://localhost:8888')
