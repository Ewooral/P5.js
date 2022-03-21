// let path = require('path');
const fs = require('fs');
const url = require('url');
const http = require('http');
const lookup = require("mime-types").lookup;

let handleRequest = function (request, response) {
  let parsedURL = url.parse(request.url, true);

  let path = parsedURL.path.replace(/^\/+|\/+$/g, '');

  if(path == ""){
    path = "index.html";
  }
  console.log(`Requested path ${path} `);

  let file = __dirname + '/public/' + path;

  fs.readFile(file, (err, data) => {
   if (err) {
      console.log(`File Not Found ${file}`);
      response.writeHead(404);
      response.end();
    } else {
      //specify the content type in the response
      console.log(`Returning ${path}`);
      response.setHeader("X-Content-Type-Options", "nosniff");
      let mime = lookup(path);
      response.writeHead(200, { "Content-type": mime });
      // switch (path) {
      //   case "main.css":
      //     res.writeHead(200, { "Content-type": "text/css" });
      //     break;
      //   case "main.js":
      //     res.writeHead(200, { "Content-type": "application/javascript" });
      //     break;
      //   case "index.html":
      //     res.writeHead(200, { "Content-type": "text/html" });
      // }
      response.end(data);
    }

})
    
};


let server = http.createServer(handleRequest);
server.listen(8080, pasteAMessage());

function pasteAMessage(){
  console.log("Connected at port 8080");
};