import express from 'express'
import { apiRouter } from './routers/api.router.js'
import { PORT } from './config.js'

const app = express()

app.listen(PORT, ()=> { console.log(`servidor escuchando en puerto ${PORT}`)})


app.use('/api', apiRouter)