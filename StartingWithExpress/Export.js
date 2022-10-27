//const http = require('http');

const express = require('express')


const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware')
    next()
})

app.use((req,res,next)=>{
    console.log('in another middleware')
    res.send('<h1>Hello From Express</h1>')
    //res.send( { hello: 123 })

})
//const server = http.createServer(app);    

//server.listen(3000);

app.listen(3000)

//no need of importing http module & creating sever and using server.listen()
//just use app.listen instead()
