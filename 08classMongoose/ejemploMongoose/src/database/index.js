import mongoose from "mongoose";
import { MONGODB_CNX_STR } from "../config.js";


try {
    await mongoose.connect(MONGODB_CNX_STR)
    console.log('Connected to MongoDB!');
} catch (error) {
    console.error('error connecting to mongo', error.message)
}


export {manager as usuariosManager} from './Usuario.js'
export {manager as publicacionesManager} from './Publicacion.js'