import { Router } from 'express';
import { getController, postController } from '../controllers/ventas.controller.js';


export const ventasRouter = Router()
ventasRouter.get('/ventas', getController)
ventasRouter.post('/ventas', postController)