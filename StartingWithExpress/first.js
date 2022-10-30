
const express = require('express')

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))


app.get('/',(req,res)=>{

    res.send('<form action ="/" method = "POST"><input type="text" name="username"><button>Sent</button>')
})

app.post('/',(req,res)=>{
    res.send(`<h1>hello</h1>`)
    console.log(req.body)
    res.redirect('/')
})

app.listen(3000);