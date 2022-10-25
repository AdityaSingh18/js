const http = require('http');

const server = http.createServer((req,res)=>{

    const url = req.url;
    if(url==='/home'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome Home</h1></body>')
    res.write('</html');
    return res.end();
    }

    if(url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>This is About Page</title></head>')
        res.write('<body><h1>Welcome to About Page</h1></body>')
        res.write('</html');
         return res.end();
        }

        if(url==='/node'){
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title>This is About Node js</title></head>')
            res.write('<body><h1>Welcome to my Node Js project</h1></body>')
            res.write('</html');
             return res.end();
            }

  
})

server.listen(4000);