// started operating system process

console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')

//completed and exited operating system process
// Pereceba que mesmo com o timeout seja 0 seg ele é feito após o third
