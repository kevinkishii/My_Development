const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page')
    }
    if(req.url==='/about'){
        // WHAT if I insert a blocking code!!
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        // after inserting this long for loop, other people can't use the server, because the thread is blocked with this task
        res.end('About Page')
    }
    res.end('Error Page')
})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000 ...')
})
