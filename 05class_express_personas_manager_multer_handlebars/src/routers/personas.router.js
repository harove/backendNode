import { Router } from 'express';
import { getController, postController } from '../controllers/personas.controller.js';


export const personasRouter = Router()
personasRouter.get('/api/personas', getController)
personasRouter.post('/api/personas', postController)
