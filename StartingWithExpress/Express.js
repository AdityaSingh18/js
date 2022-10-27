const express = require('express')
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-products',(req,res,next)=>{
    console.log('in the middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title">Add Product<br><input type="text" name="title">Enter Size<br><button type="submit">Click here To Submit</button></form>')
   
    

    
})

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/thanks')
})
app.use('/thanks',(req,res,next)=>{
   res.send('<h1>Thanks For Your Data</h1>')
})
app.use('/',(req,res,next)=>{
    console.log('in another middleware')
    res.send('<h1>Hello From Express</h1>')
   

})


app.listen(3000)

