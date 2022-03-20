const hostname = '127.0.0.1';
const port = 3000;


// EXPRESS JS 
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.use('/', router);

router.use(express.static("./public/"));

router.get('/home',function(req,res){
  res.sendFile(path.join(__dirname +'./public/HTML/index.html'));
  //__dirname : It will resolve to your project folder.
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});