//Primeira forma e mais utilizada é colocando .promises no final para tornar as funções asyncronas em promessas
const {readFile,writeFile} = require('fs').promises

const start = async() =>{
    try {
        const first = await readFile('../content/first.txt','utf8')
        const second = await readFile('../content/second.txt','utf8')
        await writeFile('../content/result-await-patterns.txt',`Result with await pattern, promises: ${first}, ${second}`)
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

//Segunda forma é utilizando o módulo util que transforma as funções asíncronas em promessas.
/*
const {readFile,writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try {
        const first = await readFilePromise('../content/first.txt','utf8')
        const second = await readFilePromise('../content/second.txt','utf8')
        await writeFilePromise('../content/result-await-patterns.txt',`Result with await pattern, promises: ${first}, ${second}`)
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}
*/

//Esta terceira forma é mais para didática para visualizarmos o processo de tornar a função em promessa.
/*
const {readFile} = require('fs')

const getText = (path)=> {
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

//try server para criar um campo onde podemos receber os errors
// await é para esperarmos a cumprimento da promessa para realizarmos a próxima tarefa
const start = async() =>{
    try {
        const first = await getText('../content/first.txt')
        const second = await getText('../content/second.txt')
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}
*/

start()

/*
getText('../content/first.txt')
    .then(result=>console.log(result))
    .catch((err)=>console.log(err))
*/

