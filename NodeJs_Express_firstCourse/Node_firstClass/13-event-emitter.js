const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order, be carful with the order
// additional arguments
// built-in modules utilize it

//customEmitter.emit('response','john',34)

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved: ${name} with id ${id}`)
})

//customEmitter.emit('response','john',34)

customEmitter.on('response',()=>{
    console.log('some other logic here')
})

customEmitter.emit('response','john',34)