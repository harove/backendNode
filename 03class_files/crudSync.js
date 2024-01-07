// Crud with files. Doing it in a sync way
// lets use the fs library 
//we use require
// const fs = require('fs')
import fs from 'fs/promises'
const filename = 'archivo.txt'

async function main(){
    try{
        await fs.writeFile(filename, 'Hola gente')
        // await fs.appendFile(filename,`!!!\n`)
        // await fs.appendFile(filename,`${new Date().toISOString()}: operacion exitosa`)
        await fs.readFile(filename,'utf-8')
        console.log('termine')
        // await fs.unlink(filename) 
        console.log('trabajo con archivos finalizado')
    } catch(error) {
        console.error('An error occurred:', error);
        if (error.code === 'ENOENT')
             console.log('El archivo no existe')
    }
}

main()
console.log('termine main')
