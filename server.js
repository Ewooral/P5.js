let path = require('path');
// let fs = require('fs');

// fs.readFile('./HTML/index.html', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);

// })

let handleRequest = function (request, response) {
  response.writeHead(200, {'Content-Type': 'html'});
  response.end(`
    <h1>Hello, world!</h1>
  `)
    
};


const http = require('http');
let server = http.createServer(handleRequest);
server.listen(8080, pasteAMessage());

function pasteAMessage(){
  console.log("Connected at port 8080")
};