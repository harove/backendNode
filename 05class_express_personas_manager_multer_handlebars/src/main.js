import express from 'express'
import handlebars from 'express-handlebars'
import { personasRouter } from './routers/personas.router.js'
import { ventasRouter } from './routers/ventas.router.js'
import { upload } from './midlewares/midlewares.js'
import { pm } from './services/personasManager.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.use(express.static('./views'))
app.use('/static', express.static('./static'))

app.use(personasRouter)
app.use(ventasRouter)


app.post('/imagenes', upload.single('foto'),  (req,res)=>{
    console.log(req.file)
    res.send(req.file)
})


const personas = await pm.getPersonas()
console.log({personas})

app.get('/',(req,res)=>{
    res.render('personas.handlebars', {
        titulo: 'Personas',
        hayPersonas: personas.length > 0,
        personas
    })
})

app.get('/registro',(req,res)=>{
    res.render('registro.handlebars', {
        titulo: 'Registro'
    })
})

// app.post('/mensajes',(req, res)=>{
//     res.send('saludos desde el back');
// })



// app.get('/', (req, res) => {
//     req.saludar()
//     res.send('personas.handlebars')
// })










// app.get('/', (req, res) => {
//     res.render('personas.handlebars')
// })

// app.get('/registro', (req, res) => {
//     res.render('registro.handlebars')
// })





app.listen(8080, ()=> {console.log('conectado ok')})