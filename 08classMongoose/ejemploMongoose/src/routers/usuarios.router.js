import { Router } from "express";
import { usuariosManager } from "../database/index.js";
import { extraerArchivo } from "../middlewares/file.js";


export const usuariosRouter = Router()

usuariosRouter.get('/', async (req,res)=>{
    const pojos = await usuariosManager.find().lean()
    res.json({pojos})
})

usuariosRouter.get('/:id', async (req,res)=>{
    const pojo = await usuariosManager.findById({_id: req.params.id}).lean()
    res.json({pojo})
})

usuariosRouter.post('/', extraerArchivo('foto') ,async (req,res)=>{
    try {
        if(req.file){
            req.body.fotoUrl = req.file.path
        }
        const entity = await usuariosManager.create(req.body)
        res.status(201).json(entity.toObject())
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})



usuariosRouter.post('/:id/actualizaciones', extraerArchivo('foto'), async (req,res)=>{
    const camposAActualizar = {}
    if (req.file){
        camposAActualizar.fotoUrl = req.file.path
    }
    if (req.body.alias){
        camposAActualizar.alias = req.body.alias
    }
    let actualizado
    try {
        actualizado = await usuariosManager.findByIdAndUpdate(req.params.id, {$set: camposAActualizar}, { new: true})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    if (!actualizado){
        res.status(404).json({message: 'usuario no encontrado'})
    }
    res.json({actualizado})
})


usuariosRouter.delete('/:id', async (req,res)=>{
    borrado = await usuariosManager.findByIdAndDelete(req.params.id, {$set: camposAActualizar}, { new: true})
    if (!borrado){
        res.status(404).json({message: 'usuario no encontrado'})
    }
    res.json({borrado})
})