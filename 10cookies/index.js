import express from "express";
import cookieParser from "cookie-parser";

const app = express()

const server = app.listen(8080, ()=> {console.log('conectado')})

app.use(cookieParser())


app.get('/setCookie', (req,res)=>{
    res.cookie('CoderCookie', 'Esta es una cookie muy poderosa', {maxAge:10000}).send('Cookie')
})