const express = require('express')
const app = express()
const people = require('../routers/people')
const auth = require('../routers/auth')

//static asset
app.use(express.static('../methods-public'))

//parse from data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/login',auth)

app.listen(5000,()=>{
    console.log('listening on port 5000')
})