import http from 'http'
import fs from 'fs/promises'

const pers = {nombre: 'pepe'}

const server = http.createServer(async(request,response)=>{
    console.log(request.url)

    switch(request.url){
        case '/personas':
            response.end(JSON.stringify(pers))
            break
        default:
            const pagina = await fs.readFile('./views/index.html', 'utf-8')
            response.end(pagina)        
    }

    // const pagina = fs.readFile()
})

server.listen(8080,()=>{
    console.log("listening on port 8080")
})