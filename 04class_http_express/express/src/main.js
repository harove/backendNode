import express, { urlencoded } from 'express'
import { UserManager } from './UserManager.js'


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const um = new UserManager('./db/usuarios.json')

app.get('/personas', async(req,res)=>{
    const { rol, limit } = req.query
    res.json(await um.buscarTodas({ rol, limit }))
})

app.get('/', async(req,res)=>{   
    res.sendFile('index.html', {root: './views'})     
})

app.post('/personas', async(req,res)=>{   
    const {nombre, rol} = req.body
    try {
        const creada = await um.agregar({nombre, rol})
        res.json({creada})
    } catch (error) {
        res.status(400).json({
            mensaje: error.message
        })
    }
})

// app.put('/personas', async(req,res)=>{   
//     res.json(personas)
// })

// app.delete('/personas', async(req,res)=>{   
//     res.json(personas)
// })

app.get('/personas/:id', async(req,res)=>{
    const id = Number(req.params.id)
    try {
        const pojo = await um.buscarPorId(id)
        res.json(pojo)
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
})


// app.get('/', async(req,res)=>{
//     res.sendFile('index.html',{root: './views'})
// })




app.listen(8080, () => console.log('conectado'))