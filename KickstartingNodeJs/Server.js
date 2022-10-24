const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Hello,I am Aditya');
    res.end();
  
})

server.listen(4000);


