const express = require('express')
const app = express()
const logger = require('../logger')
const authorize = require('../authorize')
const morgan = require('morgan')

//1.use vs route
//2. options of middleware - our own / express / third party 

//app.use([logger,authorize])
//app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})